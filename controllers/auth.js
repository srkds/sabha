/* MODEL */
const Speaker = require("../models/speaker");

const jwt = require("jsonwebtoken");
const expressJWT = require("express-jwt");

exports.signup = (req, res) => {
  const speaker = new Speaker(req.body);
  speaker.save((err, speaker) => {
    if (err) {
      return res.status(400).json({
        err: err,
      });
    }
    res.json({
      name: speaker.name,
      email: speaker.email,
      id: speaker._id,
    });
  });
};
