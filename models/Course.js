const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema(
  {
    _id:mongoose.Schema.Types.ObjectId,
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    playList:{
        tyoe:Array,
        required:true
    },
    rate:{
        type:Number,
        default:0
    }
  },{timestamps:true}
);

const course = new mongoose.model("Course", courseSchema);

module.exports = course;
