const { Schema, model } = require("mongoose");

const reqString = { type: String, required: true };
const reqArray = { type: Array, required: true };

const menSchema = new Schema({
  title: reqString,
  description: reqString,
  category: reqString,
  gender: reqString,
  originalPrice: reqString,
  discountPrice: reqString,
  size: reqString,
  rating: reqString,
  quantity: reqString,
  img: reqArray,
});

const MenModel = model("men", menSchema);

module.exports = MenModel;
