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

router.post("/:videoId", async (req, res) => {
  const { videoId } = req.params;
  const { title, price, imgUrl, productUrl } = req.body;
  const product = new Product({
    title: title,
    price: price,
    imgUrl: imgUrl,
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
