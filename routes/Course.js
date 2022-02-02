const express = require("express");
const {
  getAllCourses,
  getCourseById,
  addCourse,
  deleteCourseId,
} = require("../controllers/Course");
const course = express.Router();

//GET api/v1/courses
course.get("/", getAllCourses);

//GET api/v1/courses/:id
course.get("/:id", getCourseById);

//DELETE api/v1/courses/:id
course.delete("/:id", deleteCourseId);

//POST api/v1/courses
course.post("/", addCourse);

//DELTE api/v1/courses
//course.post("/dall", deleteAllcourse);

module.exports = course;
