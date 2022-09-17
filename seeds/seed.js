const seedCharacters = require('./character-seeds');
const seedInteractions = require('./interaction-seeds');
const seedLocations = require('./location-seeds');

const sequelize = require('../config/connection');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedLocations();
  console.log('\n----- LOCATIONS SEEDED -----\n');

  await seedCharacters();
  console.log('\n----- CHARACTERS SEEDED -----\n');

  await seedInteractions();
  console.log('\n----- INTERACTIONS SEEDED -----\n');

  process.exit(0);
};

seedAll();
