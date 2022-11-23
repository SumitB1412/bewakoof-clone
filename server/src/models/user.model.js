const { Schema, model } = require("mongoose");

const reqString = { type: String, required: true };
const reqArray = { type: Array, required: true };

const userSchema = new Schema({
  firstName: reqString,
  lastName: reqString,
  email: reqString,
  password: reqString,
  myBag: reqArray,
  myOrders: reqArray,
  myOrders: reqArray,
});

const UserModel = model("user", userSchema);

module.exports = UserModel;
