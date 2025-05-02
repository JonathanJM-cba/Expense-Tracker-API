const { sequelize } = require("../config/configDb");
const Categorys = require("./categorysModel");
const Expenses = require("./expensesModel");
const Users = require("./usersModel");

const models = {
  userModel: require("./usersModel"),
  expenseModes: require("./expensesModel"),
};

//Relaciones Users - Expenses
Users.hasMany(Expenses, {
  foreignKey: "idUser",
  sourceKey: "id",
});

Expenses.belongsTo(Users, {
  foreignKey: "idUser",
  targetKey: "id",
});

//Relaciones Cateogrys - Expenses
Categorys.hasMany(Expenses, {
  foreignKey: "idCategory",
  sourceKey: "id",
});

Expenses.belongsTo(Categorys, {
  foreignKey: "idCategory",
  targetKey: "id",
});

sequelize.sync({ force: false });

module.exports = models;
