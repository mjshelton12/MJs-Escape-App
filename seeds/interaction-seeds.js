const { Interaction } = require('../models');

const interactionData = [
  {
    location_id: 1,
    interaction: "Go to Kitchen",
    resolution_id: 2
  },
  {
    location_id: 1,
    interaction: "Go to Bathroom",
    resolution_id: 3
  },
  {
    location_id: 2,
    interaction: "Go to Bedroom",
    resolution_id: 1
  },
  {
    location_id: 2,
    interaction: "Go to Bathroom",
    resolution_id: 3
  },
  {
    location_id: 3,
    interaction: "Go to Bedroom",
    resolution_id: 1
  },
  {
    location_id: 3,
    interaction: "Go to Kitchen",
    resolution_id: 2
  }
];

const seedInteractions = () => Interaction.bulkCreate(interactionData);

module.exports = seedInteractions;
