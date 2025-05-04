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

const updateExpense = async (req, res) => {
  const { idExpense } = req.params;
  const { amount, description, date, idCategory } = req.body;
  const { id, email } = req.user;
  try {
    //Se verifica si existe el gasto solicitado
    const expense = await expenseModel.findByPk(idExpense);

    if (!expense) return handleHttpError(res, "ERROR_EXPENSE_NOT_FOUND", 404);

    //Se verifica si el gasto pertenece al usuario
    if (expense.idUser !== id)
      return handleHttpError(res, "ERROR_NO_UPDATE_PERMISSION", 403);

    const expenseData = {
      amount: amount,
      description: description,
      date: date,
      idCategory: idCategory,
    };

    const category = await categoryModel.findByPk(idCategory);

    const updatedExpense = await expense.update(expenseData);

    res.status(200).json({
      message: "Gasto actualizado con éxito",
      data: {
        amount: updatedExpense.amount,
        description: updatedExpense.description,
        date: updatedExpense.date,
        userEmail: email,
        category: category.name,
      },
    });
  } catch (error) {
    console.log("Error al intentar actualizar gasto: ", error);
    handleHttpError(res, "ERROR_UPDATE_EXPENSE", 500);
  }
};

const deleteExpense = async (req, res) => {
  const { idExpense } = req.params;
  const { id } = req.user;
  try {
    //Se verifica si existe el gasto
    const expense = await expenseModel.findByPk(idExpense);

    if (!expense) return handleHttpError(res, "ERROR_EXPENSE_NOT_FOUND", 404);

    //Se verifica si el gasto pertenece al usuario correcto
    if (expense.idUser !== id)
      return handleHttpError(res, "ERROR_NO_DELETE_PERMISSION", 403);

    //Se elimina el gasto
    await expense.destroy();

    res.status(200).json({ message: "Gasto eliminado con éxito" });
  } catch (error) {
    console.log("Error al intentar eliminar gasto: ", error);
    handleHttpError(res, "ERROR_DELETE_EXPENSE", 500);
  }
};

module.exports = { createExpense, updateExpense, deleteExpense };
