const express = require("express");
const {
  createPoll,
  voteToPoll,
  getPollResults,
  getAllPollsByUserId,
} = require("../controllers/poll");
const { isSignedIn } = require("../middlewares/auth");
const { setOptionId, getPollById } = require("../middlewares/poll");
const router = express.Router();

router.param("optionId", setOptionId);
router.param("pollId", getPollById);

router.post("/poll", isSignedIn, createPoll);
router.put("/poll/vote/:optionId", voteToPoll);

router.get("/poll", isSignedIn, getAllPollsByUserId);
router.get("/poll/:pollId/results", getPollResults);

module.exports = router;
