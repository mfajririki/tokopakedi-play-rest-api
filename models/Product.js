const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
    },
    price: {
      required: true,
      type: Number,
    },
    imgUrl: {
      required: true,
      type: String,
    },
    productUrl: {
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

module.exports = mongoose.model("Product", productSchema);
