const express = require("express");
const {addFund,getFundData} = require("../controllers/fundController");
const { isAuthenticatedUser } = require("../middleware/checkUserAuth");
const router = express.Router();

router.post("/addFund",addFund);
router.get("/getFundData",isAuthenticatedUser,getFundData);
module.exports = router;
