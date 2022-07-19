const { expressjwt: jwt } = require("express-jwt");

exports.isSignedIn = jwt({
  secret: process.env.SECRET,
  algorithms: ["HS256"],
  userProperty: "auth",
});
