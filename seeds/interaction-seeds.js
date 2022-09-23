const { Interaction } = require('../models');

const interactionData = [
  {
    location_id: 1,
    interaction: "Go to Kitchen",
    location_patch: 2,
    item_post: null
  },
  {
    location_id: 1,
    interaction: "Go to Bathroom",
    location_patch: 3,
    item_post: null
  },
  {
    location_id: 2,
    interaction: "Go to Bedroom",
    location_patch: 1,
    item_post: null
  },
  {
    location_id: 2,
    interaction: "Go to Bathroom",
    location_patch: 3,
    item_post: null
  },
  {
    location_id: 3,
    interaction: "Go to Bedroom",
    location_patch: 1,
    item_post: null
  },
  {
    location_id: 3,
    interaction: "Go to Kitchen",
    location_patch: 2,
    item_post: null
  }
];

const seedInteractions = () => Interaction.bulkCreate(interactionData);

module.exports = seedInteractions;
