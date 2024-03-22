const express = require("express");
const cors = require("cors");
const app = express();
// Connect to MongoDB
const Db = require("./config/database");
Db();
const { cloudinaryConnect } = require("./config/cloudinary");
cloudinaryConnect();

const fileUpload = require("express-fileupload");
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use(express.json());

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// Routes

const cartRouter = require("./routes/cartRoutes");
const productRouter = require("./routes/productRoutes");

app.use("/api/products", productRouter);

app.use("/api/cart", cartRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
