const studentCtrl = {};

const { findById } = require("../models/Student");
const Student = require("../models/Student");

studentCtrl.getStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

studentCtrl.createStudent = async (req, res) => {
  const { name, lastName, motherName, birthDate, group } = req.body;
  const newStudent = new Student({
    name: name,
    lastName: lastName,
    motherName: motherName,
    birthDate: birthDate,
    group: group,
  });

  await newStudent.save();
  res.json({ message: "Student Seved" });
};

// id
studentCtrl.getStudent = async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.json(student);
};

studentCtrl.deleteStudent = async (req, res) => {
  const studentDel = await Student.findByIdAndDelete(req.params.id);
  res.json("Student Deleted");
};

studentCtrl.updateStudent = async (req, res) => {
  const { name, lastName, motherName, birthDate, group } = req.body;
  const studentUp = await Student.findByIdAndUpdate(req.params.id, {
    name,
    lastName,
    motherName,
    birthDate,
    group,
  });
  res.json(" Student updated");
};

module.exports = studentCtrl;
