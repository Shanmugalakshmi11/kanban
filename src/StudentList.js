// src/StudentList.js
import React from "react";
import Student from "./Student";

const StudentList = ({ students }) => {
  return (
    <div>
      <h1>Student List</h1>
      {students.map((student, index) => (
        <Student key={index} student={student} />
      ))}
    </div>
  );
};

export default StudentList;
