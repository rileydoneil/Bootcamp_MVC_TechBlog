const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: 'creator_id',
});

Post.belongsTo(User, {
    foreignKey: 'creator_id',
});

Comment.belongsTo(Post, {
    foreignKey: 'PostID',
});

Post.hasMany(Comment, {
    foreignKey: 'PComments',
})

module.exports = { User, Post, Comment };