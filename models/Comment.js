const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    username: {
      required: true,
      type: String,
    },
    comment: {
      required: true,
      type: String,
    },
    videoId: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", commentSchema);
