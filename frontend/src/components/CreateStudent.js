import React, { useState } from "react";
import axios from "axios";

export default function CreacteStudent() {
  const inicialValue = {
    name: "",
    lastName: "",
    motherName: "",
    birthDate: "",
    group: "",
  };
  const [student, setStudent] = useState(inicialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postStudent = {
      name: student.name,
      lastName: student.lastName,
      motherName: student.motherName,
      birthDate: student.birthDate,
      group: student.group,
    };
    await axios.post("http://localhost:4000/api/students", postStudent);

    setStudent({ ...inicialValue });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label> Name</label>
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
          ></input>

          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={student.lastName}
            onChange={handleChange}
          ></input>

          <label>Mother Name</label>
          <input
            type="text"
            name="motherName"
            value={student.motherName}
            onChange={handleChange}
          ></input>

          <label>Birth Date </label>
          <input
            type="date"
            name="birthDate"
            value={student.birthDate}
            onChange={handleChange}
          ></input>

          <label>Group</label>
          <input
            type="text"
            name="group"
            value={student.group}
            onChange={handleChange}
          ></input>
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}
