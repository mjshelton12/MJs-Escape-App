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
  through: 'location'
});

Interaction.hasOne(Resolution, {
  foreignKey: 'interaction_id',
});

Resolution.belongsTo(Interaction, {
  foreignKey: 'interaction_id',
});

Character.belongsToMany(Item, {
  through: 'inventory',
});

// Inventory.belongsTo(Item, {
//   foreignKey: 'item_id'
// });

Item.belongsToMany(Character, {
  through: "inventory"
})



module.exports = {Character, 
                  Interaction, 
                  Location, 
                  Inventory,
                  Item,
                  Resolution,
                  User};
