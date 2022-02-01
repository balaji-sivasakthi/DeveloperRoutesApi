const mongoose = require("mongoose");
const moment = require('moment')
const userSchema = new mongoose.Schema(
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
    course: {
      type: Array,
      default:[]
    },
    order: {
      type: Array,
      default:[]
    },
    cart: {
      type: Array,
      default:[]
    },
  },{timestamps:true}
);

const User = new mongoose.model("User", userSchema);

module.exports = User;
