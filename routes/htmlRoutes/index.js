const router = require('express').Router();
const {Post, Comment, User} = require('../../models');

const postRoutes = require('./postRoutes');

router.use('/posts', postRoutes);

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

router.get('/dashboard', async (req, res) => {
    try {
        if(req.session.logged_in) {
            const postData = await Post.findAll({
                include: [{
                    model: User,
                },
                {
                    model: Comment,
                },
            ],
                
            })
            res.render('dashboard');
        } else {
            res.redirect('/login');
        }
    } catch (err) {
        res.status(500).json(err);
    }
        
});


//move loggedin as function?