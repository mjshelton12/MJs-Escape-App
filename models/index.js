const Character = require('./Character');
const Interaction = require('./Interaction');
const Location = require('./Location');
const Inventory = require('./Inventory')
const Item = require('./Item')
const Resolution = require('./Resolution')
const User = require('./User')

Character.belongsTo(Location, {
  foreignKey: 'location_id'
})

Location.hasMany(Interaction, {
  foreignKey: 'location_id'
})

Interaction.belongsTo(Location, {
  foreignKey: 'location_id'
});

module.exports = {Character, 
                  Interaction, 
                  Location, 
                  Inventory,
                  Item,
                  Resolution,
                  User};
