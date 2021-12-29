const { Schema, model } = require("mongoose");

const studentSchema = new Schema({
  name: String,
  lastName: String,
  motherName: String,
  birthDate: Date,
  group: String,
});

module.exports = model("Student", studentSchema);
