const cloudinary = require("cloudinary").v2;

exports.cloudinaryConnect = () => {
  try {
    cloudinary.config({
      cloud_name: "dwbhbo46z",
      api_key: "784213479648633",
      api_secret: "33tTko3D51J5rE-M39CUcdMPeUw",
    });
    console.log("cloudiary connected");
  } catch (error) {
    console.log(error);
  }
};
