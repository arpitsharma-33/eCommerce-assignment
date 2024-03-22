// const express = require("express");
// const route = express();

// const bodyParser = require("body-parser");
// route.use(bodyParser.json());
// route.use(bodyParser.urlencoded({ extended: true }));

// const multer = require("multer");
// const path = require("path");

// route.use(express.static("public"));

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(
//       null,
//       path.join(__dirname, "../public/productImages"),
//       function (err, success) {
//         if (err) {
//           throw err;
//         }
//       }
//     );
//   },
//   filename: function (req, file, cb) {
//     const name = Date.now() + "-" + file.originalname;
//     cb(null, name, function (error, success) {
//       if (error) {
//         throw error;
//       }
//     });
//   },
// });

// const upload = multer({ storage: storage });

// const productController = require("../controllers/productController");

// route.post(
//   "/addProduct",
//   upload.single("image"),
//   productController.addProduct
// );

// route.get("/getProduct", productController.listProducts);

// module.exports = route;
