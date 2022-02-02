const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
  {
    _id:mongoose.Schema.Types.ObjectId,
    userId:{
        type:String,
        required:true,
        unique:true

    },
    course:{
        type:Array,
        required:true
    },
    address:{
        type:Array,
        required:true
    },
  },{timestamps:true}
);

const order = new mongoose.model("Order", orderSchema);

module.exports = order;
