const { check } = require("express-validator");
const validateResults = require("../utils/handleValidation");

const registerUserValidator = [
  check("name")
    .exists()
    .withMessage("El campo name debe existir")
    .notEmpty()
    .withMessage("El campo name no debe estar vacío")
    .isString()
    .withMessage("El campo name debe ser un string")
    .isLength({ max: 255 })
    .withMessage("El campo name no debe superar los 255 caracteres"),
  check("email")
    .exists()
    .withMessage("El campo email debe existir")
    .notEmpty()
    .withMessage("El campo email no debe estar vacío")
    .isEmail()
    .withMessage("El campo email debe estar en formato de correo")
    .normalizeEmail()
    .isLength({ max: 255 })
    .withMessage("El campo email no debe superar los 255 caracteres"),
  check("password")
    .exists()
    .withMessage("El campo password debe existir")
    .notEmpty()
    .withMessage("El campo password no debe estar vacío")
    .isString()
    .withMessage("El campo password debe ser un string")
    .isLength({ max: 255 })
    .withMessage("El campo password no debe superar los 255 caracteres"),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const loginUserValidator = [
  check("email")
    .exists()
    .withMessage("El campo email debe existir")
    .notEmpty()
    .withMessage("El campo email no debe estar vacío")
    .isEmail()
    .withMessage("El campo email debe estar en formato de correo")
    .normalizeEmail()
    .isLength({ max: 255 })
    .withMessage("El campo email no debe superar los 255 caracteres"),
  check("password")
    .exists()
    .withMessage("El campo password debe existir")
    .notEmpty()
    .withMessage("El campo password no debe estar vacío")
    .isString()
    .withMessage("El campo password debe ser un string")
    .isLength({ max: 255 })
    .withMessage("El campo password no debe superar los 255 caracteres"),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { registerUserValidator, loginUserValidator };
