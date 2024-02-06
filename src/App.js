// src/App.js
import React from "react";
import StudentList from "./StudentList";
import "./App.css";

const App = () => {
  const students = [
    { name: "Shanmugalakshmi", rollNumber: "101", grade: "A" },
    { name: "Parthiban", rollNumber: "102", grade: "A" },
    { name: "Sangamithra", rollNumber: "103", grade: "A" },
    { name: "Vinoth", rollNumber: "104", grade: "B" },
    // Add more students as needed
  ];

  return (
    <div className="app-container">
      <h1>Student Details App</h1>
      <StudentList students={students} />
    </div>
  );
};

export default App;
