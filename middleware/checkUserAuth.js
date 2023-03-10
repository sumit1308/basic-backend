const ErrorClass = require("../utils/errorClass");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAuthenticatedUser = async (req, res, next) => {
  console.log(req.cookies);
  const { token } = req.cookies;
  
  console.log(token);
  if (!token) {
    return next(new ErrorClass("You are not authenticated user", 401));
  }

  const userid = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(userid.id);

  next();
};

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHander(
          `Role: ${req.user.role} is not allowed to access this resouce `,
          403
        )
      );
    }

    next();
  };
};
