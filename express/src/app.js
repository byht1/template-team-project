const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

global.basedir = __dirname;

// FIXME: delete
const testOne = require("./routes/api/testOne");
// FIXME: delete
const tetsTwo = require("./routes/api/testTwo");

// Всі роути повинні бути вище swagger
const swagger = require("./routes/swagger");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// FIXME: delete
app.use("/test-1", testOne);
// FIXME: delete
app.use("/test-2", tetsTwo);

app.use("/docs", swagger);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
