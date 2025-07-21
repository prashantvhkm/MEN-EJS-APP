const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017")
    .then(() => {
      console.log("db is con");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
