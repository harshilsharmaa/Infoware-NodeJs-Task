const express = require("express")

const {isAuthenticated} = require("../middleware/auth")
const {register, login, logout, updateProfile, myProfile,deleteProfile} = require("../controllers/user");

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/update/profile").put(isAuthenticated, updateProfile);
router.route("/profile/me").get(isAuthenticated, myProfile);
router.route("/logout").get(isAuthenticated, logout);
router.route("/delete/profile").get(isAuthenticated, deleteProfile);



module.exports = router;