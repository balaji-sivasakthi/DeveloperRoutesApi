const Order = require('../models/Order');
const mongoose = require("mongoose");
exports.getAllOrders = (req, res) => {

Order.find().then(result=>{
    res.send(result)
})
.catch(err=>{
    res.send(err)
})

};

exports.getOrderById = (req, res) => {

    Order.findById(req.params.id).then(result=>{
        res.send(result)
    })
    .catch(err=>{
        res.send(err)
    })
};

exports.deleteOrderId = (req, res) => {
    Order.findByIdAndRemove(req.params.id).then(result=>{
        res.send(result)
    })
    .catch(err=>{
        res.send(err)
    })
  
};

exports.addOrder=async(req,res)=>{
    const order = new Order({
        _id : new mongoose.Types.ObjectId(),
      ...req.body
    })
    order.save().then(result=>{
        res.status(200).json({"msg":"Success","result":result})
    })
    .catch(err=>{
        res.status(200).json({"msg":"Not db Added","result":err})
    })

};