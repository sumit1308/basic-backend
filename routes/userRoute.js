const express = require("express");
const {registerUser,getUser,logoutUser} = require("../controllers/userController");
const { isAuthenticatedUser } = require("../middleware/checkUserAuth");
const expressRouter = express.Router();

expressRouter.post("/register",registerUser);
expressRouter.get("/getUser",isAuthenticatedUser,getUser);
expressRouter.get("/logout",logoutUser);

module.exports = expressRouter;
