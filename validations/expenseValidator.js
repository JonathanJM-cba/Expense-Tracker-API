const { check } = require("express-validator");
const validateResults = require("../utils/handleValidation");

const expenseValidator = [
  check("amount")
    .exists()
    .withMessage("El campo amount debe existir")
    .notEmpty()
    .withMessage("El campo amount no puede estar vacío")
    .isDecimal()
    .withMessage("El campo amount debe ser númerico")
    .isLength({ max: 10 })
    .withMessage("El campo amount no debe superar los 10 digitos"),
  check("description")
    .exists()
    .withMessage("El campo description debe existir")
    .notEmpty()
    .withMessage("El campo description no puede estar vacío")
    .isString()
    .withMessage("El campo description debe ser un string")
    .isLength({ max: 255 })
    .withMessage("El campo description no debe superar los 255 caracteres"),
  check("date")
    .exists()
    .withMessage("El campo date debe existir")
    .notEmpty()
    .withMessage("El campo date no puede estar vacío")
    .isISO8601()
    .withMessage("El campo date debe estar en formato de fecha yyyy-mm-dd"),
  check("idCategory")
    .exists()
    .withMessage("El campo idCategory debe existir")
    .notEmpty()
    .withMessage("El campo idCategory no debe estar vacío")
    .isInt({ min: 1, max: 7 })
    .withMessage(
      "El campo idCategory debe ser un entero (Del 1 al 7 - categorías existentes)"
    ),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { expenseValidator };
