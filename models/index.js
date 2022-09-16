const Character = require('./Character');
const Interaction = require('./Interaction');
const Location = require('./Location');

Character.hasOne(Location, {
  foreignKey: 'character_id',
  onDelete: 'CASCADE'
});

Location.hasMany(Interaction, {
    foreignKey: 'location_id'
})

Interaction.belongsTo(Location, {
  foreignKey: 'location_id'
});

module.exports = { Character, Interaction, Location };
