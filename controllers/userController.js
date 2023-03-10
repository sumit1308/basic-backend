const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register a User
exports.registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  let passwordHash = await bcrypt.hash(password, 10);
  console.log("Hi");
  try{
    const user = await User.create({
      name,
      email,
      password:passwordHash
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });

    // options for cookie
    const options = {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };

    res.status(201).cookie("token", token, options).json({   
      success: true,
      user,
      token,
    });
    //res.status(201).send("User registered");
  }catch (error) {
    next(error);
  }
};

exports.getUser = async (req, res, next) => {

  const user = await User.find({});  
  res.status(200).send(user);
};

exports.logoutUser = async (req, res, next) => {
  console.log("logoutUser");
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "user logout",
  });
};


