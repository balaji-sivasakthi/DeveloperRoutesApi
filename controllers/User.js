const User = require('../models/User');
const mongoose = require("mongoose");
exports.getAllUsers = (req, res) => {

User.find().then(result=>{
    res.send(result)
})
.catch(err=>{
    res.send(err)
})

};

exports.getUserById = (req, res) => {

    User.findById(req.params.id).then(result=>{
        res.send(result)
    })
    .catch(err=>{
        res.send(err)
    })
};

exports.deleteUserId = (req, res) => {
    User.findByIdAndRemove(req.params.id).then(result=>{
        res.send(result)
    })
    .catch(err=>{
        res.send(err)
    })
  
};

exports.addUser=async(req,res)=>{
    const user = new User({
        _id : new mongoose.Types.ObjectId(),
      ...req.body
    })
    user.save().then(result=>{
        res.status(200).json({"msg":"Success","result":result})
    })
    .catch(err=>{
        res.status(200).json({"msg":"Not db Added","result":err})
    })

};