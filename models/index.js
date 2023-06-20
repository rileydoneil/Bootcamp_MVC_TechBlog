const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: 'creator_id',
    onDelete: 'SET NULL',
});

Post.belongsTo(User, {
    foreignKey: 'creator_id',
});

Comment.belongsTo(Post, {
    foreignKey: 'postID',
});

Post.hasMany(Comment, {
    foreignKey: 'postID',
    onDelete: 'CASCADE',
})

User.hasMany(Comment, {
    foreignKey: 'creator_id',
    onDelete: 'SET NULL',
});

Comment.belongsTo(User, {
    foreignKey: 'creator_id',
});

module.exports = { User, Post, Comment };