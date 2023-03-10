const mongoose = require("mongoose");

const advertiserSchema = new mongoose.Schema({
  advertiserName: {
    type: String,
    required: [true, "Please Enter Advertiser Name"],
  },
  companyName: {
    type: String,
    required: [true, "Please Enter Company Name"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Email"],
  },
  website: {
    type: String,
    required: [true, "Please Enter website"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Please Enter Phone Number"],
  },
  address: {
    type: String,
    required: [true, "Please Enter Address"],
  },
  state: {
    type: String,
    required: [true, "Please Enter State"],
  },
  zipCode: {
    type: String,
    required: [true, "Please Enter zipCode"],
  },
  country: {
    type: String,
    required: [true, "Please Enter Country"],
  },
  im: {
    type: String,
    required: [true, "Please Enter IM"],
  },
  fileName: {
    type: String,
    required: [true, "Please upload image"],
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
module.exports = mongoose.model("Advertiser", advertiserSchema);
