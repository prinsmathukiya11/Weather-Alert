const mongoose = require("mongoose");
require("dotenv").config();
let url = process.env.DATABASE;
console.log(url);
mongoose
  .connect(url, { useNewUrlParser: true })
  .then((result) => console.log("connected to db successfully in WeatherController"))
  .catch((err) => console.log(err));
module.exports = mongoose;

