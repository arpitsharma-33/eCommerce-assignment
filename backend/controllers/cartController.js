const { default: mongoose } = require("mongoose");
const Cart = require("../models/Cart");

exports.addToCart = async (req, res) => {
  try {
    const { name, quantity, unitPrice, image } = req.body;
    console.log("image", image);

    const cart = new Cart({
      name,
      quantity,
      unitPrice,
      image,
    });

    await cart.save();
    const updatedCart = await Cart.find();
    res.status(201).json( updatedCart );
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.listCart = async (req, res) => {
  try {
    const cart = await Cart.find();
    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
exports.removeCart = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("_id", id, "typeof id ", typeof id);
    const cart = await Cart.findByIdAndDelete(id, { new: true });
    const remainingCartItems = await Cart.find();
    res.status(200).json({
      cart,
      remainingCartItems,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.updateQuantity = async (req, res) => {
  try {
    const { _id, quantity } = req.body;

    console.log("id", _id, "quantity", quantity);
    const updatedCartItem = await Cart.findByIdAndUpdate(
      _id,
      { quantity },
      { new: true }
    );
    const remainingCartItems = await Cart.find();
    console.log("updatedCartItem", updatedCartItem);

    if (!updatedCartItem) {
      return res.status(404).json({ error: "Cart item not found" });
    }

    return res.status(200).json(remainingCartItems);
  } catch (error) {
    res
      .status(500)
      .json({ message: "error while updating quantity", error: error });
  }
};
