const mongoose = require("mongoose");
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
    isAdmin:{
      type:Boolean,
      default:false
    }
  },{timestamps:true}
);

const User = new mongoose.model("User", userSchema);

module.exports = User;
