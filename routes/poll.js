const express = require("express");
const { createPoll, voteToPoll } = require("../controllers/poll");
const { isSignedIn } = require("../middlewares/auth");
const { setOptionId } = require("../middlewares/poll");
const router = express.Router();

router.param("optionId", setOptionId);

router.post("/poll", isSignedIn, createPoll);
router.put("/poll/vote/:optionId", voteToPoll);

module.exports = router;
