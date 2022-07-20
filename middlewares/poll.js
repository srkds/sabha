exports.setOptionId = (req, res, next, id) => {
  req.optionId = id;
  next();
};
