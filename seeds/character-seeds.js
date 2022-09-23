const { Character } = require('../models');

const characterData = [
  {
    user_id: 1,
    character_name: "Steven",
    stats: "ugly",
    location_id: 1,
  },
  {
    user_id: 1,
    character_name: "Posh",
    stats: "pretty",
    location_id: 2,
  }
];

const seedCharacters = () => Character.bulkCreate(characterData);

module.exports = seedCharacters;
