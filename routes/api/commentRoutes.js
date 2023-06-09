const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// POST /api/comments
router.post('/', async (req, res) => {
    try {
        console.log('HERE IS THE REQ.BODY');
        console.log(JSON.stringify(req.body));
        const commentData = await Comment.create({
            ...req.body,
            creator_id: req.session.user_id,
        });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//delete a post
router.delete('/', async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id,
            },
        });
        if(!commentData) {
            res.status(400).json({message: 'no comment found with this id!'});
            return;
        } else {
            res.status(200).json(commentData);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
