const Course = require('../models/Course');
const mongoose = require("mongoose");
exports.getAllCourses = (req, res) => {

Course.find().then(result=>{
    res.send(result)
})
.catch(err=>{
    res.send(err)
})

};

exports.getCourseById = (req, res) => {

    Course.findById(req.params.id).then(result=>{
        res.send(result)
    })
    .catch(err=>{
        res.send(err)
    })
};

exports.deleteCourseId = (req, res) => {
    Course.findByIdAndRemove(req.params.id).then(result=>{
        res.send(result)
    })
    .catch(err=>{
        res.send(err)
    })
  
};

exports.addCourse=async(req,res)=>{
    const course = new Course({
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