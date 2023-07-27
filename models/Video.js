const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
    },
    author: {
      required: true,
      type: String,
    },
    imgUrl: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Video", videoSchema);
