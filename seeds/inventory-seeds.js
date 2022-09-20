const { Inventory } = require('../models');

const inventoryData = [
  {
    item_id: 1,
    character_id: 1
  },
  {
    item_id: 1,
    character_id: 2
  }
];

const seedInventory = () => Inventory.bulkCreate(inventoryData);

module.exports = seedInventory;