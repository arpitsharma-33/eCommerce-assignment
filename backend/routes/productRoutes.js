const express  = require("express")
const productRouter = express.Router()

const {addProduct,listProducts} = require("../controllers/productController")

productRouter.post("/add-product", addProduct);
productRouter.get("/get-product", listProducts);

module.exports = productRouter;