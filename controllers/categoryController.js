const { categoryModel } = require("../models");
const handleHttpError = require("../utils/handleError");

const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const categoryData = {
      name: name,
    };

    const newCategory = await categoryModel.create(categoryData);
    res
      .status(201)
      .json({ message: "Categoría creada con éxito", data: newCategory });
  } catch (error) {
    console.log("Error al intenar crear categoría: ", error);
    handleHttpError(res, "ERROR_CREATE_CATEGORY", 500);
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await categoryModel.findAll({});
    res.status(200).json(categories);
  } catch (error) {
    console.log("Error al intentar obtener todas las categorías: ", error);
    handleHttpError(res, "ERROR_GET_ALL_CATEGORIES", 500);
  }
};

module.exports = { createCategory, getAllCategories };
