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

// Call Routes
const videoRoute = require("./routes/video.routes");
const productRoute = require("./routes/product.routes");
const commentRoute = require("./routes/comments.routes");

const app = express();
app.use(cors());

app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Routes
app.use("/api/v1/videos", videoRoute);
app.use("/api/v1/products", productRoute);
app.use("/api/v1/comments", commentRoute);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
