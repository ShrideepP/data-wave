const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const fs = require("node:fs");

const app = express();
const routes = require("./router/router");

const PORT = process.env.PORT || 3000;
const CONNECTION = require("./database/db");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(cors());
app.use("/", routes);
CONNECTION();

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
