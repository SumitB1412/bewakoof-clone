const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to Homepage");
});

app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});

module.exports = app;
