const poll = require("../models/poll");

exports.setOptionId = (req, res, next, id) => {
  req.optionId = id;
  next();
};

exports.getPollById = (req, res, next, id) => {
  poll.findById(id).exec((err, poll) => {
    if (err || !poll) {
      return res.status(400).json({ error: "Poll Not Found" });
    }
    req.poll = poll;
    next();
  });
};
