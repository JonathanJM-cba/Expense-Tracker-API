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

module.exports = { createCategory };
