const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/configDb");

const Categories = sequelize.define(
  "Categories",
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
    tableName: "categories",
    timestamps: true,
  }
);

module.exports = Categories;
