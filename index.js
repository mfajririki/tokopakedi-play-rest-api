require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT;
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

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

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
