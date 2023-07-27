const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment");

router.get("/:videoId", async (req, res) => {
  const { videoId } = req.params;
  try {
    const comments = await Comment.find({ videoId: videoId });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const { username, comment, videoId } = req.body;
  const newComment = new Comment({
    username: username,
    comment: comment,
    videoId: videoId,
  });
  try {
    const commentTosave = await newComment.save();
    res.json(commentTosave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
