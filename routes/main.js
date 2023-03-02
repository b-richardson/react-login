const express = require("express");
const router = express.Router();




//Main Routes - simplified for now
router.post("/signup", authController.postSignup);

module.exports = router;
