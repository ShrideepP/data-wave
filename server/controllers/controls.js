const Data = require("../schema/data-schema");

const home = (req, res) => {
  res.status(200).json({ message: "Ok" });
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
  getData,
};
