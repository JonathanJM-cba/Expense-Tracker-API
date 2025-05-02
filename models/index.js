const { sequelize } = require("../config/configDb");
const Categories = require("./categoriesModel");
const Expenses = require("./expensesModel");
const Users = require("./usersModel");

const models = {
  userModel: require("./usersModel"),
  expenseModel: require("./expensesModel"),
  categoryModel: require("./categoriesModel"),
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
Categories.hasMany(Expenses, {
  foreignKey: "idCategory",
  sourceKey: "id",
});

Expenses.belongsTo(Categories, {
  foreignKey: "idCategory",
  targetKey: "id",
});

sequelize.sync({ force: false });

module.exports = models;
