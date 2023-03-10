const Fund = require("../models/fundModel");


// Add Fund
exports.addFund = async (req, res, next) => {
  console.log("fund controller",req.body);
  const { Advertisers, ModeofPayment, Amount, Description, Comment } = req.body;
  console.log("fund controller",Advertisers);
  try{
    console.log("try");
    const fundDetails = await Fund.create({
      Advertisers,
      ModeofPayment,
      Amount,
      Description,
      Comment
    });
    res.status(200).send("Done");
  }catch (error) {
    next(error);
  }
};

// Get Fund Data
exports.getFundData = async (req, res, next) => {
  const fundData = await Fund.find({});  
  res.status(200).send(fundData);
};

