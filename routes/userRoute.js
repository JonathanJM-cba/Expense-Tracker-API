const express = require("express");
const { createUser, loginUser } = require("../controllers/userController");
const {
  registerUserValidator,
  loginUserValidator,
} = require("../validations/userValidator");
const router = express.Router();

router.post("/register", registerUserValidator, createUser);

router.post("/login", loginUserValidator, loginUser);

module.exports = router;
