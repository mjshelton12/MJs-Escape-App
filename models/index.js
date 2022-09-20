const Character = require('./Character');
const Interaction = require('./Interaction');
const Location = require('./Location');

Character.belongsTo(Location, {
  foreignKey: 'location_id'
})

Location.hasMany(Interaction, {
  foreignKey: 'location_id'
})

Interaction.belongsTo(Location, {
  foreignKey: 'location_id'
});

module.exports = { Character, Interaction, Location };
