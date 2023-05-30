const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// GET /profile

router.get('/profile/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id, {
            include: [{model: Post}, {model: Comment}],
        });
        const user = userData.get({plain: true});
        if(req.params.id === req.session.user_id) {
            user.is_current_user = true;
        } else {
            user.is_current_user = false;
        }
        res.render('profile', {
            ...user,
            is_current_user: user.is_current_user,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        if(req.session.logged_in) {
            res.redirect(`/profile/${req.session.user_id}`);
            return;
        } else {
            res.redirect('/login');
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

