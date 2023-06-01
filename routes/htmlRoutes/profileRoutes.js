const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// GET /profile

router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{model: User}, {model: Comment}],
            where: {creator_id: req.params.id},
        });
        if(!postData) {
            res.status(405).json({message: 'No posts found!'});
            return;
        };
        if(req.params.id === req.session.user_id) {
            is_current_user = true;
        } else {
            is_current_user = false;
        }
        const posts = postData.map((post) => post.get({ plain: true }));

        console.log(posts);
        res.render('dashboard', {
            posts,
            is_current_user,
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

module.exports = router;
