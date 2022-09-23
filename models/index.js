const Character = require('./Character');
const Interaction = require('./Interaction');
const Location = require('./Location');
const Inventory = require('./Inventory')
const Item = require('./Item')
const Resolution = require('./Resolution')
const User = require('./User')

User.hasMany(Character, {
  foreignKey: 'user_id'
});

Character.belongsTo(Location, {
  foreignKey: 'location_id'
})

Location.hasMany(Interaction, {
  foreignKey: 'location_id'
})

Interaction.belongsTo(Location, {
  through:  { model: 'location'}
});

Interaction.hasOne(Resolution, {
  foreignKey: 'interaction_id',
});

Resolution.belongsTo(Interaction, {
  foreignKey: 'interaction_id',
});

Character.belongsToMany(Item, {
  through: { model: 'inventory' }
});

Item.belongsToMany(Character, {
  through: { model:"inventory" }
});

module.exports = {Character, 
                  Interaction, 
                  Location, 
                  Inventory,
                  Item,
                  Resolution,
                  User};
