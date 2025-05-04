const { expenseModel, categoryModel, userModel } = require("../models");
const handleHttpError = require("../utils/handleError");

const createExpense = async (req, res) => {
  const { amount, description, date, idCategory } = req.body;
  const { id, email } = req.user;
  try {
    const expenseData = {
      amount: amount,
      description: description,
      date: date,
      idUser: id,
      idCategory: idCategory,
    };

    const newExpense = await expenseModel.create(expenseData);

    const user = await userModel.findOne({
      where: { email: email },
    });

    const category = await categoryModel.findByPk(idCategory);

    res.status(201).json({
      message: "Gasto creado con éxito",
      data: {
        amount: newExpense.amount,
        description: newExpense.description,
        date: newExpense.date,
        userEmail: user.email,
        category: category.name,
      },
    });
  } catch (error) {
    console.log("Error al intentar crear gasto: ", error);
    handleHttpError(res, "ERROR_CREATE_EXPENSE", 500);
  }
};

module.exports = { createExpense };
