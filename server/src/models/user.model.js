const { Schema, model } = require("mongoose");

const reqString = { ype: String, required: true };

const userSchema = new Schema({
  firstName: reqString,
  lastName: reqString,
  email: reqString,
  password: reqString,
});

const UserModel = model("user", userSchema);

module.exports = UserModel;
