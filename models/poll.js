const mongoose = require("mongoose");
const { Schema } = mongoose;

const { ObjectId } = Schema;
const pollSchema = new Schema(
  {
    question: String,
    options: [{ name: String, count: Number }],
    speaker: {
      type: ObjectId,
      ref: "Speaker",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Poll", pollSchema);
