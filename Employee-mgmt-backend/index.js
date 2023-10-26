const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;

// data base connection --------
mongoose.connect("mongodb://127.0.0.1:27017/employee-mgmt").then((e) => {
  console.log("database connected successfully!");
});

app.get("/", (req, res) => {
  res.send("this is the home request");
});

app.listen(port, () => {
  console.log(`Server is running at :${port}`);
});
