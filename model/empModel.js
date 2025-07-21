const mongoose = require("mongoose");

const empSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  salary: {
    type: Number,
    require: true,
  },
});

const empModel = mongoose.model("emps", empSchema);

module.exports = empModel;
