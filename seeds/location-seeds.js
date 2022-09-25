const { Location } = require("../models");

const locationData = [
  // Location 1
  {
    location_name: "Bedroom",
  },
  // Location 2
  {
    location_name: "Kitchen",
  },
  // Location 3
  {
    location_name: "Bathroom",
  },
  // Location 4
  {
    location_name: "Den",
  },
  // Location 5
  {
    location_name: "Study",
  },
  // Location 6
  {
    location_name: "Greenhouse",
  },
  // Location 7
  {
    location_name: "Closet",
  },
];

const seedLocations = () => Location.bulkCreate(locationData);

module.exports = seedLocations;
