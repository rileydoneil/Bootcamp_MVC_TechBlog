const router = require('express').Router();
const { User } = require('../../models');

//api/users endpoint
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });
    const validPassword = await userData.checkPassword(req.body.password);

    if (!userData || !validPassword) {
      res
        .status(403)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.user_name = userData.username;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

// GET /api/users/loggedin (get the logged in user's id)
router.get('/loggedin', (req, res) => {
  try {
    if (req.session.user_id) {
        const loggedinUser = req.session.user_id;
        res.json(loggedinUser);
    } else {
        res.status(400).json({ message: 'no logged in user' });
    }
  } catch (error) {
    res.status(500).json({error});
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post('/signup', async (req, res) => {
  try {
    console.log(req.body);
    let userData = await User.findOne({ where: { username: req.body.username } });

    if (userData) {
      res
        .status(400)
        .json({ message: 'This username has already been used' });
      return;
    }
    if(!req.body.username || !req.body.password) {
      res
        .status(400)
        .json({ message: 'Please fill out all fields. I am just a computer...' });
      return;
    }

    userData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.user_id = userData.id;      
      req.session.logged_in = true;
      res.status(200).json({ user: userData, message: 'You are now logged in!' });
    });
    
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
