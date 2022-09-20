const { Resolution } = require('../models');

const resolutionData = [
  {
    interaction_id: 1,
    resolution: "Put route to change location"
  },
  {
    location_id: 1,
    resolution:  "Put route to change location",
  },
  {
    location_id: 2,
    resolution: "Put route to change location",
  }
];

const seedResolution = () => Resolution.bulkCreate(resolutionData);

module.exports = seedResolution;
