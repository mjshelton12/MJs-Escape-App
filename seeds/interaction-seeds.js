const { Interaction } = require('../models');

const interactionData = [
  {
    location_id: 1,
    interaction: "Go to Kitchen",
    change: 2,
    change_destination: "location"
  },
  {
    location_id: 1,
    interaction: "Go to Bathroom",
    change: 3,
    change_destination: "location"
  },
  {
    location_id: 1,
    interaction: "Pick up Snazzy Jacket",
    change: 13,
    change_destination: "item"
  },
  {
    location_id: 1,
    interaction: "Try to Leave",
    change: 2,
    change_destination: "win?"
  },
  {
    location_id: 2,
    interaction: "Go to Bedroom",
    change: 1,
    change_destination: "location"
  },
  {
    location_id: 2,
    interaction: "Go to Bathroom",
    change: 3,
    change_destination: "location"
  },
  {
    location_id: 2,
    interaction: "Pick up Frog",
    change: 6,
    change_destination: "item"
  },
  {
    location_id: 3,
    interaction: "Go to Bedroom",
    change: 1,
    change_destination: "location"
  },
  {
    location_id: 3,
    interaction: "Go to Kitchen",
    change: 2,
    change_destination: "location"
  },
  {
    location_id: 3,
    interaction: "Pick up Rusted Key",
    change: 2,
    change_destination: "item"
  }
];

const seedInteractions = () => Interaction.bulkCreate(interactionData);

module.exports = seedInteractions;
