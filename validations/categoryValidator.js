const { check } = require("express-validator");
const validateResults = require("../utils/handleValidation");

const validatorCreateCateogory = [
  check("name")
    .exists()
    .withMessage("El campo name debe existir")
    .notEmpty()
    .withMessage("El campo name no debe estar vacío")
    .isString()
    .withMessage("El campo name debe ser un string")
    .isLength({ max: 255 })
    .withMessage("El campo name no debe superar los 255 caracteres"),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { validatorCreateCateogory };
