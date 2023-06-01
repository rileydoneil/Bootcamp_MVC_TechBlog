const Post = require('../models/Post');

const postsData = [
    {
      title: 'Post 1 Title',
      contents: 'Post 1 Contents',
      creator_id: '041559aa-6e0e-46bd-9b16-9822f6cc36d1'
    },
    {
      title: 'Post 2 Title',
      contents: 'Post 2 Contents',
      creator_id: '041559aa-6e0e-46bd-9b16-9822f6cc36d1'
    },
    // Add more posts as needed
];

const seedPosts = () => Post.bulkCreate(postsData);
module.exports = seedPosts;
