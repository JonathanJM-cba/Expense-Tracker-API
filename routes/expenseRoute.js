const express = require("express");
const { createExpense } = require("../controllers/expenseController");
const checkAuth = require("../middleware/checkAuth");
const { expenseValidator } = require("../validations/expenseValidator");
const router = express.Router();

router.post("/", checkAuth, expenseValidator, createExpense);

module.exports = router;
