// src/Student.js
import React from "react";
import "./Student.css";

const Student = ({ student }) => {
  return (
    <div className="student-container">
      <h2 className="student-name">{student.name}</h2>
      <p className="student-details">Roll Number: {student.rollNumber}</p>
      <p className="student-details">Grade: {student.grade}</p>
    </div>
  );
};

export default Student;
