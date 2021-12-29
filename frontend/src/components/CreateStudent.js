import React, { useState } from "react";

export default function CreacteStudent() {
  const [name, setNeme] = useState("");
  const [lastName, setLastName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [group, setGroup] = useState("");

  const handleSubmit = (e) => {
    e.prevertDefault();
    if ([name, lastName, motherName, birthDate, group].includes("")) {
      console.log("esta vacio");
    } else {
      console.log("todo   sbien");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label> Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setNeme(e.target.value)}
          ></input>

          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>

          <label>Mother Name</label>
          <input
            type="text"
            name="motherName"
            value={motherName}
            onChange={(e) => setMotherName(e.target.value)}
          ></input>

          <label>Birth Date </label>
          <input
            type="date"
            name="birthDate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          ></input>

          <label>Group</label>
          <input
            type="text"
            name="group"
            value={group}
            onChange={(e) => setGroup(e.target.value)}
          ></input>
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}
