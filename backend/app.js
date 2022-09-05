const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Thank you Ryan");
});

app.listen(3000, () => {
  console.log("Open at localhost:3000");
});
