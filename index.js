require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const mongoString = process.env.DATABASE_URL;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoString);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

// Call Routes
const videoRoute = require("./routes/video.routes");
const productRoute = require("./routes/product.routes");
const commentRoute = require("./routes/comments.routes");

// Routes
app.use("/api/v1/videos", videoRoute);
app.use("/api/v1/products", productRoute);
app.use("/api/v1/comments", commentRoute);
app.get("*", (req, res) => {
  res.json("Invalid URL");
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("listening for requests");
  });
});
