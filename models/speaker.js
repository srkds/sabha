const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const crypto = require("crypto");

const { Schema } = mongoose;

const speakerSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      trim: true,
      require: true,
      maxlength: 32,
    },
    bio: {
      type: String,
      trim: true,
      maxlength: 130,
    },
    salt: String,
    encrypted_password: {
      type: String,
      trim: true,
    },
  },

  { timestamps: true }
);

/* VIRTUALS */
speakerSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv4();
    this.encrypted_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

/* METHODS */
speakerSchema.method = {
  authenticate: function (plainpassword) {
    /**
     * Authenticate
     * match hashed value with encrypted password
     * */
    return this.encryptPassword(plainpassword) === this.encrypted_password;
  },
  encryptPassword: function (plainpassword) {
    /**
     *  Generate Encrypted Password from given plain password
     **/
    if (!plainpassword) return "";
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainpassword)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};

module.exports = mongoose.model("Speaker", speakerSchema);
