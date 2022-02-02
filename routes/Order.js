const express = require("express");
const {
  getAllOrders,
  getOrderById,
  addOrder,
  deleteOrderId,
} = require("../controllers/Order");
const order = express.Router();

//GET api/v1/orders
order.get("/", getAllOrders);

//GET api/v1/orders/:id
order.get("/:id", getOrderById);

//DELETE api/v1/orders/:id
order.delete("/:id", deleteOrderId);

//POST api/v1/orders
order.post("/", addOrder);

//DELTE api/v1/orders
//order.post("/dall", deleteAllOrder);

module.exports = order;
