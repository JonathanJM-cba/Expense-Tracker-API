const express = require("express");
const router = express.Router();

router.use("/categories", require("./categoryRoute"));
router.use("/auth", require("./userRoute"));
router.use("/expenses", require("./expenseRoute"));

module.exports = router;
