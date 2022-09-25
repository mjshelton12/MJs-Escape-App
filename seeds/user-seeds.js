const bcrypt = require('bcrypt')
const { User } = require('../models');

const userData = [
  {
    user_name: "RedRobin",
    password: bcrypt.hashSync("password1234", 10),
  }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
