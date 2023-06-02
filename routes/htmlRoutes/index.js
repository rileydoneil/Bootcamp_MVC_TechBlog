const router = require('express').Router();
const {Post, Comment, User} = require('../../models');

// const postRoutes = require('./postRoutes');
const profileRoutes = require('./profileRoutes');

router.use('/profile', profileRoutes);

// router.use('/posts', postRoutes);

router.get('/', async (req, res) => {
    try {
        if(req.session.logged_in) {
            res.redirect('/dashboard');
            return;
        } else {
            res.redirect('/login');
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/signup', (req,res) => {
    try {
        if(req.session.logged_in) {
            res.redirect('/dashboard');
            return;
        } else {
            res.render('signup');
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// router login
router.get('/login', (req, res) => {
    try {
        if(req.session.logged_in) {
            res.redirect('/dashboard');
            return;
        } else {
            res.render('login');
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dashboard', async (req, res) => {
    try {
        if(true) { //req.session.logged_in
            const postData = await Post.findAll({
                include: [{
                    model: User,
                },
                {
                    model: Comment,
                },
                ],
                order: [[ 'createdAt', 'DESC' ]],
            });
            const showNav = true;
            const posts = postData.map((post) => post.get({ plain: true }));
            
            res.render('dashboard', {
                posts,
                showNav,
            });
        } else {
            res.redirect('/login');
        }
    } catch (err) {
        res.status(500).json(err);
    }
        
});

router.get('/post/add', async (req, res) => {
    try {
        if(req.session.logged_in) {
            const showNav = true;
            res.render('add-post', {
                showNav,
            });
        } else {
            res.redirect('/login');
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;


//move loggedin as function?