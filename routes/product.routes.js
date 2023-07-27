const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.get("/:videoId", async (req, res) => {
  const { videoId } = req.params;
  try {
    const products = await Product.find({ videoId: videoId });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const { title, price, productUrl, videoId } = req.body;
  const product = new Product({
    title: title,
    price: price,
    productUrl: productUrl,
    videoId: videoId,
  });
  try {
    const productToSave = await product.save();
    res.json(productToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
