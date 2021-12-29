const { Router } = require("express");
const router = Router();

const {
  getStudents,
  createStudent,
  getStudent,
  deleteStudent,
  updateStudent,
} = require("../controllers/studentCtrl");

router.route("/").get(getStudents).post(createStudent);

router.route("/:id").get(getStudent).delete(deleteStudent).put(updateStudent);
module.exports = router;
