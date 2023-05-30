const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll();
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req,res) => {
    try {
        //get Post creator_id
        const creator_id = req.session.user_id;
        const newPost = await Post.create({
            ...req.body,
            creator_id
        });

        res.status(200).json({newPost, message: 'Your Post has been created!'});

    } catch (err) {
        res.status(500).json(err);
    }
});

// update a Post with new Text and Title
router.put('/:id', async (req, res) => {
    try {
        const postData = await Post.update({
            ...req.body,
        },
        {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete a Post by its `id` value
router.delete('/:id', async (req, res) => {
    try {
        const PostData = await Post.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!PostData) {
            res.status(400).json({message: 'No Post found with this id!'});
            return;
        } else {
            res.status(200).json(PostData);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;