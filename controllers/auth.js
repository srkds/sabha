/* MODEL */
const Speaker = require("../models/speaker");

const jwt = require("jsonwebtoken");

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

exports.signin = (req, res) => {
  const { email, password } = req.body;

  // Find user in db based on email
  Speaker.findOne({ email }, (err, speaker) => {
    if (err || !speaker) {
      // If user having given email doesn't exist or DB error.
      // returns error
      return res.status(400).json({ error: "User not found" });
    }
    if (!speaker.authenticate(password)) {
      // If password hash doesn't match
      // then return error saying password not matching
      return res.status(400).json({ error: "Password doesn't match" });
    }

    // create token
    const token = jwt.sign({ _id: speaker._id }, process.env.SECRET);

    // set cookie
    // expire date after ten days from login
    let expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 10);
    res.cookie("token", token, { expire: expireDate });

    // Sending resp with token and user details
    const { _id, name, email } = speaker;
    res.status(200).json({
      token,
      user: { _id, name, email },
    });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Successfuly Signout" });
};
