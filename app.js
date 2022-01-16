const express = require("express");
const app = express();

const bankRouter = require("./routes/bankRoutes");
const accountRouter = require("./routes/accountRoutes");

app.use(express.json());

app.use("/", bankRouter);
app.use("/accounts", accountRouter);

module.exports = app;
