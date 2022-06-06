//external import
const express = require("express");
//internal inport
const {getUsers}= require("../controller/usersController");

const router = express.Router();

//login page
router.get('/', getUsers);

module.exports = router;
