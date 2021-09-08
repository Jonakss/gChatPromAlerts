const dotenv = require("dotenv").config();

if (dotenv.error) {
  throw dotenv.error;
}

const logger = require("./helpers/logger");

const express = require("express");
const app = express();
const helmet = require("helmet");
const port = process.env.APP_PORT;

const router = require("./routes");

app.use(helmet());

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use("/", router.webgui);
app.use("/bot", router.bot);
app.use("/hook", router.hook);

app.listen(port, () => {
  logger.log("info", `gChatPromAlert listening in port: ${port}`);
});