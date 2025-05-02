const express = require("express");
const {
  createCategory,
  getAllCategories,
} = require("../controllers/categoryController");
const {
  validatorCreateCateogory,
} = require("../validations/categoryValidator");
const router = express.Router();

router.post("/", validatorCreateCateogory, createCategory);

router.get("/", getAllCategories);

module.exports = router;
