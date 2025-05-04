const express = require("express");
const {
  createExpense,
  updateExpense,
} = require("../controllers/expenseController");
const checkAuth = require("../middleware/checkAuth");
const { expenseValidator } = require("../validations/expenseValidator");
const router = express.Router();

router.post("/", checkAuth, expenseValidator, createExpense);

router.put("/:idExpense", checkAuth, expenseValidator, updateExpense);

module.exports = router;
