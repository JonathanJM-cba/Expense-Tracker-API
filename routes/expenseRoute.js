const express = require("express");
const { createExpense } = require("../controllers/expenseController");
const checkAuth = require("../middleware/checkAuth");
const router = express.Router();

router.post("/", checkAuth, createExpense);

module.exports = router;
