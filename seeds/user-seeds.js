const { User } = require('../models');

const userData = [
  {
    username: "RedRobin",
    password: "password1234",
  }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
