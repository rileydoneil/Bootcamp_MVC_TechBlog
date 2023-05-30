const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: 'creator_id',
});

Post.belongsTo(User, {
    foreignKey: 'creator_id',
});

Comment.belongsToMany(Post, {
    foreignKey: 'post',
});

Post.hasMany(Comment, {
    foreignKey: 'comment',
})

module.exports = { User, Post, Comment };