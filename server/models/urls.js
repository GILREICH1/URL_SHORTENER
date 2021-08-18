const mongoose = require("mongoose");
const { nanoid } = require("nanoid");

const urlSchema = new mongoose.Schema({
  longURL: String,
  shortURL: {
    type: String,
    required: false,
    default: () => nanoid(6),
  },
  visits: Number,
});

const URL = mongoose.model("url", urlSchema);

module.exports = URL;
