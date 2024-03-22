const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
  mongoose.connect(
    "mongodb+srv://arpitsharma752002:JEtHuBGXXxKS0iRT@cluster1.dmrpnhk.mongodb.net/ITAssignment"
  );
  mongoose.connection.on("connected", () => {
    console.log("Database connected");
  });
  mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected");
  });
};
module.exports = dbConnect;
