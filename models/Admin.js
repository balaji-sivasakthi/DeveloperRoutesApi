const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema(
  {
    _id:mongoose.Schema.Types.ObjectId,
    firstName: {
      type: String,
      required: true,
    },
    secondName: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
      unique:true
    },
    email: {
      type: String,
      required: true,
      unique:true
    },
    pass: {
      type: String,
      required: true,
    },
  },{timestamps:true}
);

const admin = new mongoose.model("Admin", adminSchema);

module.exports = admin;
