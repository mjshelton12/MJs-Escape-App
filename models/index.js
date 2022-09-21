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
  foreignKey: 'location_id'
});

Interaction.hasOne(Resolution, {
  foreignKey: 'resolution_id',
});

Inventory.belongsTo(Character, {
  foreignKey: 'character_id',
});

Inventory.hasMany(Item, {
  foreignKey: 'item_id',
});

module.exports = {Character, 
                  Interaction, 
                  Location, 
                  Inventory,
                  Item,
                  Resolution,
                  User};
