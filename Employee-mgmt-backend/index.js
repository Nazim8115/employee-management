const express = require("express");
const mongoose = require("mongoose");
const app = express();

var bodyParser = require("body-parser");
const employeeController = require("./controller/empcontroller.js");
require("dotenv").config();
const port = process.env.PORT;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// data base connection --------
mongoose.connect("mongodb://127.0.0.1:27017/employee-mgmt").then((e) => {
  console.log("database connected successfully!");
});

app.get("/", (req, res) => {
  res.send("this is the home request");
});
app.post("/create-employee", employeeController.createEmployee);

app.listen(port, () => {
  console.log(`Server is running at :${port}`);
});
