const express = require("express");
const {
  getAllUsers,
  getUserById,
  addUser,
  deleteUserId,
} = require("../controllers/User");
const user = express.Router();

//GET api/v1/users
user.get("/", getAllUsers);

//GET api/v1/users/:id
user.get("/:id", getUserById);

//DELETE api/v1/users/:id
user.delete("/:id", deleteUserId);

//POST api/v1/users
user.post("/", addUser);

//DELTE api/v1/users
//user.post("/dall", deleteAllUser);

module.exports = user;
