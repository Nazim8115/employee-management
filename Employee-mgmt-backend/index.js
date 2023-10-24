const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("this is the home request");
});

app.listen(8001, () => {
  console.log("server is running at port ", 8001);
});
