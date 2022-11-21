const express = require("express");
const path = require("path");
const app = express();
const myRouter = require("./routes/myRouter");

app.use("/", myRouter);
module.exports = app;