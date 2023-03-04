const Data = require("../schema/data-schema");
const jsonData = require("../data.json");

const home = (req, res) => {
  res.status(200).json({ message: "Ok" });
};

const insertData = async (req, res) => {
  try {
    await Data.insertMany(jsonData);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const getData = async (req, res) => {
  try {
    const data = await Data.find({});
    res.status(201).json(data);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = {
  home,
  insertData,
  getData,
};
