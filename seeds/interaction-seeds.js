const { Interaction } = require("../models");

const interactionData = [
  // Bedroom
  {
    location_id: 1,
    interaction: "Go to Kitchen",
    change: 2,
    change_destination: "location",
  },
  {
    location_id: 1,
    interaction: "Go to Greenhouse",
    change: 6,
    change_destination: "location",
  },
  {
    location_id: 1,
    interaction: "Pick up Snazzy Jacket",
    change: 13,
    change_destination: "item",
  },

  // Kitchen
  {
    location_id: 2,
    interaction: "Go to Bedroom",
    change: 1,
    change_destination: "location",
  },
  {
    location_id: 2,
    interaction: "Go to Bathroom",
    change: 3,
    change_destination: "location",
  },
  {
    location_id: 2,
    interaction: "Pick up Knife",
    change: 4,
    change_destination: "item",
  },
  // Bathroom
  {
    location_id: 3,
    interaction: "Go to Study",
    change: 5,
    change_destination: "location",
  },
  {
    location_id: 3,
    interaction: "Go to Kitchen",
    change: 2,
    change_destination: "location",
  },
  {
    location_id: 3,
    interaction: "Go to Closet",
    change: 7,
    change_destination: "location",
  },
  // Den
  {
    location_id: 4,
    interaction: "Go to Greenhouse",
    change: 6,
    change_destination: "location",
  },
  {
    location_id: 4,
    interaction: "Go to Study",
    change: 5,
    change_destination: "location",
  },
  {
    location_id: 4,
    interaction: "Try to Leave",
    change: 2,
    change_destination: "win?",
  },
  // Study
  {
    location_id: 5,
    interaction: "Go to Den",
    change: 4,
    change_destination: "location",
  },
  {
    location_id: 5,
    interaction: "Go to Bathroom",
    change: 3,
    change_destination: "location",
  },
  {
    location_id: 5,
    interaction: "Pick up Shiney Key",
    change: 14,
    change_destination: "item",
  },
  // Greenhouse
  {
    location_id: 6,
    interaction: "Go to Bedroom",
    change: 1,
    change_destination: "location",
  },
  {
    location_id: 6,
    interaction: "Go to Den",
    change: 4,
    change_destination: "location",
  },
  {
    location_id: 6,
    interaction: "Pick up Frog",
    change: 6,
    change_destination: "item",
  },
  // Closet
  {
    location_id: 7,
    interaction: "Go to Bathroom",
    change: 3,
    change_destination: "location",
  },
  {
    location_id: 7,
    interaction: "Pick up Crowbar",
    change: 8,
    change_destination: "item",
  },
  {
    location_id: 7,
    interaction: "Pick up Rusted Key",
    change: 2,
    change_destination: "item",
  },

];

const seedInteractions = () => Interaction.bulkCreate(interactionData);

module.exports = seedInteractions;
