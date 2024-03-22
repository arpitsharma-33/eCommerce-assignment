const express = require("express");
const cartRoute = express.Router();

const {
  addToCart,
  listCart,
  updateQuantity,
  removeCart,
} = require("../controllers/cartController");

cartRoute.post("/add-to-cart", addToCart);
cartRoute.delete("/remove-from-cart/:id", removeCart);

cartRoute.get("/get-cart", listCart);
cartRoute.put("/update-quantity", updateQuantity);

module.exports = cartRoute;
