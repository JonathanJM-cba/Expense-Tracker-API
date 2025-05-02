const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/configDb");

const Categorys = sequelize.define(
  "Categorys",
  {
    id: {
      type: DataTypes.INTEGER(255),
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "categorys",
    timestamps: true,
  }
);

module.exports = Categorys;
