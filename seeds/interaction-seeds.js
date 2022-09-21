const { Interaction } = require('../models');

const interactionData = [
  {
    location_id: 1,
    interaction: "Go to Kitchen",
  },
  {
    location_id: 1,
    interaction: "Go to Bathroom",
  },
  {
    location_id: 2,
    interaction: "Go to Bedroom",
  },
  {
    location_id: 2,
    interaction: "Go to Bathroom",
  },
  {
    location_id: 3,
    interaction: "Go to Bedroom",
  },
  {
    location_id: 3,
    interaction: "Go to Kitchen",
  }
];

const seedInteractions = () => Interaction.bulkCreate(interactionData);

module.exports = seedInteractions;
