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
    videoUrl: {
      required: true,
      type: String,
    },
    youtubeId: {
      required: true,
      type: String,
    },
    views: {
      required: true,
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Video", videoSchema);
