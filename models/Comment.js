// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Recipe model (table) by extending off Sequelize's Model class
class Comment extends Model {}

// set up fields and rules for Recipe model
Comment.init(
    {
        //define columns
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        contents: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postID: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id',
            },
        },
        creator_id: {
            type: DataTypes.UUID,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        createdAt: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);

module.exports = Comment;
