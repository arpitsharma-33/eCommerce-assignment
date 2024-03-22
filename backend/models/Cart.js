const mongoose = require("mongoose");

// Define the Product schema
const cartSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  unitPrice: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

// Export the Profile model
module.exports = mongoose.model("Cart", cartSchema);
