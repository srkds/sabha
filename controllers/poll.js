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

exports.getAllPollsByUserId = (req, res) => {
  // console.log(req.auth);
  // res.status(200);
  Poll.find({ speaker: req.auth._id })
    .select("question")
    .exec((err, polls) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res.json({ polls: polls });
    });
};

exports.getPoll = (req, res) => {
  res.json({ poll: req.poll });
};

exports.voteToPoll = (req, res) => {
  Poll.updateOne(
    { "options._id": req.optionId },
    { $inc: { "options.$.count": 1 } },
    (err, poll) => {
      if (err) {
        return res.status(400).json({ error: "Error Updating Poll Vote!" });
      }
      res.json({ message: "Your Vote added!" });
    }
  );
};

exports.getPollResults = (req, res) => {
  const poll = req.poll;
  let totalVotes = 0;
  let pollResult = [];
  poll.options.forEach((option) => {
    totalVotes += option.count;
  });
  poll.options.forEach((option) => {
    let result = {
      name: option.name,
      percentage: (option.count / totalVotes) * 100,
    };
    pollResult.push(result);
  });
  res.json(pollResult);
};
