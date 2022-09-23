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
    change: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    change_destination: {
      type: DataTypes.STRING,
      allowNull: false
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