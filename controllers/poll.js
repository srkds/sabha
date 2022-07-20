const Poll = require("../models/poll");

exports.createPoll = (req, res) => {
  const poll = new Poll(req.body);
  poll.save((err, poll) => {
    if (err) {
      return res.status(400).json({ error: "Error creating Poll" });
    }
    res.json(poll);
  });
};
