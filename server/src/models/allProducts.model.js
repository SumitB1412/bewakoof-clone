const { Schema, model } = require("mongoose");

const reqString = { type: String, required: true };
const reqArray = { type: Array, required: true };

const allProductsSchema = new Schema({
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

const AllProductsModel = model("allProduct", allProductsSchema);

module.exports = AllProductsModel;
