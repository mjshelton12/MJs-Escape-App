const { User } = require('../models');

const userData = [
  {
    user_name: "RedRobin",
    password: "password1234",
  }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
