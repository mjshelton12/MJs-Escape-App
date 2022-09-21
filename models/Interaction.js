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
    // location_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     references: {
    //         model: 'location',
    //         key: 'id',
    //       },
    // },
    interaction: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // resolution_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
        // references: {
        //     model: 'resolution',
        //     key: 'id',
        //   },
    //}
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