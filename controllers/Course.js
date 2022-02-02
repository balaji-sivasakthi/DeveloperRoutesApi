const course = require('../models/Course');
const mongoose = require("mongoose");
exports.getAllCourses = (req, res) => {

course.find().then(result=>{
    res.send(result)
})
.catch(err=>{
    res.send(err)
})

};

exports.getCourseById = (req, res) => {

    course.findById(req.params.id).then(result=>{
        res.send(result)
    })
    .catch(err=>{
        res.send(err)
    })
};

exports.deleteCourseId = (req, res) => {
    course.findByIdAndRemove(req.params.id).then(result=>{
        res.send(result)
    })
    .catch(err=>{
        res.send(err)
    })
  
};

exports.addCourse=async(req,res)=>{
    const course = new course({
        _id : new mongoose.Types.ObjectId(),
      ...req.body
    })
    course.save().then(result=>{
        res.status(200).json({"msg":"Success","result":result})
    })
    .catch(err=>{
        res.status(200).json({"msg":"Not db Added","result":err})
    })

};