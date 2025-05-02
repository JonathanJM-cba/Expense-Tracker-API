const express = require("express");
const { createCategory } = require("../controllers/categoryController");
const {
  validatorCreateCateogory,
} = require("../validations/categoryValidator");
const router = express.Router();

router.post("/", validatorCreateCateogory, createCategory);

module.exports = router;
