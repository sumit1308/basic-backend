const mongoose = require("mongoose");

const fundSchema = new mongoose.Schema({
  Advertisers: {
    type: String,
    required: [true, "Please Enter Advertisers Name"]
  },
  ModeofPayment: {
    type: String,
    required: [true, "Please Enter Mode of Payment"]
  },
  Amount: {
    type: Number,
    default: 0
  },
  Description:{
    type: String,
    required: [true, "Please Enter Description"]
  },
  Comment:{
    type: String,
    required: [true, "Please Enter Comment"]
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
});
module.exports = mongoose.model("Fund", fundSchema);
