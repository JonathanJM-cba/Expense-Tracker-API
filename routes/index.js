const express = require("express");
const router = express.Router();

router.use("/categories", require("./categoryRoute"));
router.use("/auth", require("./userRoute"));

module.exports = router;
