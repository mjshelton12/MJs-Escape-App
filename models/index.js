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
  through: 'location_id'
});

// Interaction.hasOne(Resolution, {
//   foreignKey: 'resolution_id',
// });

Character.hasMany(Inventory, {
  foreignKey: 'character_id',
});

Inventory.belongsTo(Item, {
  foreignKey: 'item_id'
});

Item.belongsToMany(Inventory, {
  through: "item_id"
})



module.exports = {Character, 
                  Interaction, 
                  Location, 
                  Inventory,
                  Item,
                  Resolution,
                  User};
