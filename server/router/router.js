const express = require("express");
const router = express.Router();
const { home, getData } = require("../controllers/controls");

router.get("/", home);

router.get("/data", getData);

module.exports = router;
