const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Inventory extends Model {}

Inventory.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allownull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        item_id: {
            type: DataTypes.STRING,
            allownull: false,
            references: {
                model: 'items',
                key: 'id',
            }
        },
        character_id: {
            type: DataTypes.STRING,
            allownull: false,
            references: {
                model: 'character',
                key: 'id',
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "inventory",
      }
);

module.exports = Inventory;