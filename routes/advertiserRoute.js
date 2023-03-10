const express = require("express");
const {getAdvertiserData,registerAdvertiser} = require("../controllers/advertiserController");
const { isAuthenticatedUser } = require("../middleware/checkUserAuth");
const router = express.Router();

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    }
});
const filefilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' 
        || file.mimetype === 'image/jpeg'){
            cb(null, true);
        }else {
            cb(null, false);
        }
}

const upload = multer({storage: storage, fileFilter: filefilter});

router.get("/getAdvertiserData",isAuthenticatedUser,getAdvertiserData);
//router.route("/registerAdvertiser").post(registerAdvertiser);

router.post('/registerAdvertiser', upload.single('file'), registerAdvertiser);

module.exports = router;
