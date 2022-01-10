const express = require("express");
const {
  getAllUsers,
  getUsedById,
  addUser,
  deleteUserId,
  deleteAllUser,
} = require("../controllers/User");
const user = express.Router();

//GET api/v1/user
user.get("/", getAllUsers);

//GET api/v1/user/:id
user.get("/:id", getUsedById);

//DELETE api/v1/user/:id
user.delete("/:id", deleteUserId);

//POST api/v1/user
user.post("/", addUser);

//DELTE api/v1/user
//user.post("/dall", deleteAllUser);

module.exports = user;
