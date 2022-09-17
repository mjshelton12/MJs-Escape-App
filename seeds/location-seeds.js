const { Location } = require('../models');

const locationData = [
  {
    location_name: "Bedroom"
  },
  {
    location_name: "Kitchen"
  },
  {
    location_name: "Bathroom"
  }
];

const seedLocations = () => Location.bulkCreate(locationData);

module.exports = seedLocations;
