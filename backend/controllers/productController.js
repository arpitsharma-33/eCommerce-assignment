const Product = require("../models/Product");
const cloudinary = require("cloudinary");

const uploadFileToCloudinary = async (file, folder, quality) => {
  const option = { folder };
  option.resource_type = "auto";
  //for reduce the quality
  if (quality) option.quality = quality;

  return await cloudinary.v2.uploader.upload(file.tempFilePath, option);
};

exports.addProduct = async (req, res) => {
  try {
        const { file } = req.files;
        console.log(file);
    const { name, quantity, description, unitPrice } = req.body;
  

    //file type supported
    const result = await uploadFileToCloudinary(file, "images");
    //save entry in db
    const product = new Product({
      name,
      description,
      quantity,
      unitPrice,
      image: result.secure_url,
    });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.listProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
