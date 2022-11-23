const { Schema, model } = require("mongoose");

const reqString = { type: String, required: true };
const reqArray = { type: Array, required: true };

const mobileSchema = new Schema({
  title: reqString,
  description: reqString,
  company: reqString,
  model: reqString,
  originalPrice: reqString,
  discountPrice: reqString,
  quantity: reqString,
  img: reqArray,
});

const MobileModel = model("mobile", mobileSchema);

module.exports = MobileModel;
