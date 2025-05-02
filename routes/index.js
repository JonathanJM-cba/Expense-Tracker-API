const express = require("express");
const router = express.Router();

router.use("/categories", require("./categoryRoute"));

module.exports = router;
