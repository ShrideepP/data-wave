const express = require("express");
const router = express.Router();
const { home, getData, insertData } = require("../controllers/controls");

router.get("/", home);

router.get("/insert", insertData);

router.get("/data", getData);

module.exports = router;
