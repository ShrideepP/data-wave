const express = require("express");
const router = express.Router();
const { home, insertBarData, getBarData, insertLineData, getLineData, insertDonutData, getDonutData } = require("../controllers/controls");

router.get("/", home);

router.get("/insert-bar", insertBarData);

router.get("/bar-chart", getBarData);

router.get("/insert-line", insertLineData);

router.get("/line-chart", getLineData);

router.get("/insert-donut", insertDonutData);

router.get("/donut-chart", getDonutData);

module.exports = router;
