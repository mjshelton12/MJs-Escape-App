const { Resolution } = require('../models');

const resolutionData = [
  {
    resolution: "Patch route to change location",
    interaction_id: 1
  },
  {
    resolution:  "Patch route to change location",
    interaction_id: 3
  },
  {
    resolution: "Patch route to change location",
    interaction_id: 5
  }
];

const seedResolution = () => Resolution.bulkCreate(resolutionData);

module.exports = seedResolution;
