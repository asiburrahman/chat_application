//external import
const express = require("express");
//internal inport
const {getLogin}= require("../controller/loginController");
const htmlRespones = require("../middlewares/common/htmlRespones")
const router = express.Router();

//login page
router.get('/',htmlRespones("LoginPage"), getLogin);

module.exports = router;
