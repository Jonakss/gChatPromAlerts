const dotenv = require("dotenv").config();

if (dotenv.error) {
  throw dotenv.error;
}

const express = require("express");
const { format } = require("winston");
const logger = require("./helpers/logger");
const app = express();
const port = process.env.APP_PORT;

app.get("/", (req,res) => {
  res.send("Express app");
});

app.listen(port, () => {
  logger.log("info", `Example app listening at http://localhost:${port}`);
});
