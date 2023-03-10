const Advertiser = require("../models/advertiserModel");
const multer = require('multer');

// Register a Advertiser
exports.registerAdvertiser = async (req, res, next) => {
  const fileName = req.file.filename;
  
  const { advertiserName,companyName,email,website,phoneNumber,address,state,zipCode,country,im } = req.body;
  try{
    const advertiser = await Advertiser.create({
      advertiserName,
      companyName,
      email,
      website,
      phoneNumber,
      address,
      state,
      zipCode,
      country,
      im,
      fileName
    });
    res.status(200).send("Advertiser registered");
  }catch (error) {
    next(error);
  }
};

// Get Advertiser Data
exports.getAdvertiserData = async (req, res, next) => {
  console.log("getAdvertiserData");
  const AdvertiserData = await Advertiser.find({});  
  res.status(200).send(AdvertiserData);
};

