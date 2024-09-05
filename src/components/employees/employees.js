import React from "react";
import "./employees.css";
import EmployeeImage from "../../assets/images/employees.png";

function Employees() {
  const numImages = 4;

  return (
    <div className="employees-container">
      <h1 className="employees-header">
        <span className="highlight">СОТРУДНИКИ</span>
      </h1>
      <div className="employees-grid">
        {Array.from({ length: numImages }).map((_, index) => (
          <div className="employee-card" key={index}>
            <img
              src={EmployeeImage}
              alt="Employee"
              className="employee-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Employees;
