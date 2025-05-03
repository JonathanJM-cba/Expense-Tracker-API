const express = require("express");
const { createUser } = require("../controllers/userController");
const { registerUserValidator } = require("../validations/userValidator");
const router = express.Router();

router.post("/register", registerUserValidator, createUser);

module.exports = router;
