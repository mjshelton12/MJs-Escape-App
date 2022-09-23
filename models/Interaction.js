const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Interaction extends Model {}

Interaction.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    interaction: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location_patch: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    item_post: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "interaction",
  }
);

module.exports = Interaction;