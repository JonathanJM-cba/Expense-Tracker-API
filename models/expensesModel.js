const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/configDb");

const Expenses = sequelize.define(
  "Expenses",
  {
    id: {
      type: DataTypes.INTEGER(255),
      primaryKey: true,
      autoIncrement: true,
    },
    amount: {
      type: DataTypes.FLOAT(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY(),
      allowNull: false,
    },
    idUser: {
      type: DataTypes.INTEGER(255),
      allowNull: false,
    },
    idCategory: {
      type: DataTypes.INTEGER(255),
      allowNull: false,
    },
  },
  {
    tableName: "expenses",
    timestamps: true,
  }
);

module.exports = Expenses;
