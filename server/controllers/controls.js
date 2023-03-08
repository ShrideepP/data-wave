const BarChart = require("../schema/bar-schema");
const LineChart = require("../schema/line-schema");
const DonutChart = require("../schema/donut-schema");

const jsonData = require("../data.json");

const barData = jsonData.filter(item => item.intensity && item.sector && item.country);
const lineData = jsonData.filter(item => item.likelihood && item.end_year && item.sector);
const donutData = jsonData.filter(item => item.relevance && item.topic && item.region);

const home = (req, res) => {
  res.status(200).json({ message: "Ok" });
};

const insertBarData = async (req, res) => {
  try {
    await BarChart.insertMany(barData);
    res.status(201).json({ message: "Success" });
  } catch (error) {
    res.status(401).json({ message: error.message });
  };
};

const getBarData = async (req, res) => {
  try {
    const data = await BarChart.find({});
    res.status(201).json(data);
  } catch (error) {
    res.status(401).json({ message: error.message });
  };
};

const insertLineData = async (req, res) => {
  try {
    await LineChart.insertMany(lineData);
    res.status(201).json({ message: "Success" });
  } catch (error) {
    res.status(401).json({ message: error.message });
  };
};

const getLineData = async (req, res) => {
  try {
    const data = await LineChart.find({});
    res.status(201).json(data);
  } catch (error) {
    res.status(401).json({ message: error.message });
  };
};

const insertDonutData = async (req, res) => {
  try {
    await DonutChart.insertMany(donutData);
    res.status(201).json({ message: "Success" });
  } catch (error) {
    res.status(401).json({ message: error.message });
  };
};

const getDonutData = async (req, res) => {
  try {
    const data = await DonutChart.find({});
    res.status(201).json(data);
  } catch (error) {
    res.status(401).json({ message: error.message });
  };
};

module.exports = {
  home,
  insertBarData,
  getBarData,
  insertLineData,
  getLineData,
  insertDonutData,
  getDonutData
};
