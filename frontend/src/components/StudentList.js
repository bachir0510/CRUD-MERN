import React, { useState, useEffect } from "react";
import axios from "axios";

export default function StudentList() {
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    const getSudents = async () => {
      const res = await axios.get("http://localhost:4000/api/students");
      setStudentList(res.data);
    };
    getSudents();
  }, [studentList]);

  const deleteStudent = async (id) => {
    await axios.delete("http://localhost:4000/api/students/" + id);
  };

  return (
    <div>
      {studentList.map((list) => (
        <div className="container" key={list._id}>
          <div className="header">
            <h5> Nomber {list.name}</h5>
            <div className="body">
              <p>Last Name: {list.lastName}</p>
              <p>Mother Name: {list.motherName}</p>
              <p>Birth Date: {list.birthDate}</p>
              <p>Group: {list.group}</p>
            </div>
            <div className="footer">
              <button onClick={() => deleteStudent(list._id)}>Delete</button>
              <button>UpDate</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
