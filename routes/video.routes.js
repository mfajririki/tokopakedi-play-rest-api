const express = require("express");
const router = express.Router();
const Video = require("../models/Video");

router.get("/", async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const { title, author, imgUrl } = req.body;
  const video = new Video({
    title: title,
    author: author,
    imgUrl: imgUrl,
  });
  try {
    const videoToSave = await video.save();
    res.json(videoToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
