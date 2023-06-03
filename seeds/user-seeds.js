const User = require('../models/User');

const userData = [
    {
        id: '041559aa-6e0e-46bd-9b16-9822f6cc36d1',
        username: 'user1',
        password: 'password1',
    },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });
module.exports = seedUsers;