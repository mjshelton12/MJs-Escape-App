const { Character } = require('../models');

const characterData = [
  {
    user_id: 1,
    character_name: "steven",
    stats: "ugly",
    location_id: 1,
  },
  {
    user_id: 1,
    character_name: "posh",
    stats: "pretty",
    location_id: 2,
  },
  {
    user_id: 2,
    character_name: "malor",
    stats: "evil",
    location_id: 2,
  }
];

const seedCharacters = () => Character.bulkCreate(characterData);

module.exports = seedCharacters;
