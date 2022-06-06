//external import
const express = require("express");
//internal inport
const {getInbox}= require("../controller/inboxController");

const router = express.Router();

//login page
router.get('/', getInbox);

module.exports = router;
