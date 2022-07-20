const express = require("express");
const { createPoll } = require("../controllers/poll");
const { isSignedIn } = require("../middlewares/auth");
const router = express.Router();

router.post("/poll", isSignedIn, createPoll);

module.exports = router;
