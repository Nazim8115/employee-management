const express = require("express");
const mongoose = require("mongoose");
const app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
const employeeController = require("./controller/empcontroller.js");
require("dotenv").config();
app.use(express.static("public"));

// upload middleware
const uploadFile = require("./upldmiddleware.js");
const port = process.env.PORT;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// data base connection --------
mongoose.connect("mongodb://127.0.0.1:27017/employee-mgmt").then((e) => {
  console.log("database connected successfully!");
});

app.post(
  "/create-employee",
  uploadFile.single("imageUrl"),
  employeeController.createEmployee
);
app.get("/get-employee", employeeController.getAllEmployee),
  app.listen(port, () => {
    console.log(`Server is running at :${port}`);
  });
