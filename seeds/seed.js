const seedCharacters = require('./character-seeds');
const seedInteractions = require('./interaction-seeds');
const seedLocations = require('./location-seeds');
const seedItems = require("./item-seeds")
const seedInventory = require("./inventory-seeds")
const sequelize = require('../config/connection');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedItems()
  console.log('\n----- ITEMS SEEDED -----\n')

  await seedLocations();
  console.log('\n----- LOCATIONS SEEDED -----\n');

  await seedCharacters();
  console.log('\n----- CHARACTERS SEEDED -----\n');

  await seedInventory()
  console.log('\n----- INVENTORY SEEDED -----\n')

  await seedInteractions();
  console.log('\n----- INTERACTIONS SEEDED -----\n');

  process.exit(0);
};

seedAll();
