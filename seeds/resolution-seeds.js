const { Resolution } = require('../models');

const resolutionData = [
  {
    resolution: "Put route to change location",
    interaction_id: 1
  },
  {
    resolution:  "Put route to change location",
    interaction_id: 3
  },
  {
    resolution: "Put route to change location",
    interaction_id: 5
  }
];

const seedResolution = () => Resolution.bulkCreate(resolutionData);

module.exports = seedResolution;
