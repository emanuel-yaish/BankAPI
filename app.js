const express = require("express");
const app = express();

const bankRouter = require("./routes/bankRoutes");
const accountRouter = require("./routes/accountRoutes");

app.use("/", bankRouter);
app.use("/accounts", accountRouter);

// app.get("/", function (req, res) {
//   res.status(200).send("Welcome to Bank API");
// });

// app.get("/accounts", function (req, res) {
//   try {
//     res.status(201).send(getAccounts());
//   } catch (e) {
//     res.status(400).send({
//       status: "Failed",
//       error: e.message,
//     });
//   }
// });

// app.put("/accounts", function (req, res) {
//   try {
//     res.status(201).send(handleUpdate(req.body));
//   } catch (e) {
//     res.status(400).send({
//       status: "Failed",
//       error: e.message,
//     });
//   }
// });

module.exports = app;
