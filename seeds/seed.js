const seedCharacters = require('./character-seeds');
const seedInteractions = require('./interaction-seeds');
const seedLocations = require('./location-seeds');
const seedItems = require("./item-seeds")
const seedInventory = require("./inventory-seeds")
const seedUser = require("./user-seeds")
const seedResolution = require("./resolution-seeds")
const sequelize = require('../config/connection');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUser()
  console.log('\n----- USERS SEEDED -----\n')

  // await seedItems()
  // console.log('\n----- ITEMS SEEDED -----\n')

  // await seedLocations();
  // console.log('\n----- LOCATIONS SEEDED -----\n');

  // await seedCharacters();
  // console.log('\n----- CHARACTERS SEEDED -----\n');

  // await seedInventory()
  // console.log('\n----- INVENTORY SEEDED -----\n')

  // await seedInteractions();
  // console.log('\n----- INTERACTIONS SEEDED -----\n');

  // await seedResolution()
  // console.log('\n----- RESOLUTIONS SEEDED -----\n')

  process.exit(0);
};

seedAll();
