const { Schema, model } = require("mongoose");

const reqString = { type: String, required: true };
const reqArray = { type: Array, required: true };

const womenSchema = new Schema({
  title: reqString,
  description: reqString,
  category: reqString,
  gender: reqString,
  originalPrice: reqString,
  discountPrice: reqString,
  size: reqArray,
  rating: reqString,
  quantity: reqString,
  img: reqArray,
});

const WomenModel = model("women", womenSchema);

module.exports = WomenModel;
