import React from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import "../css/addEmployee.css";

interface AddEmployeeContainerProps {}

const AddEmployeeContainer: React.FC<AddEmployeeContainerProps> = () => {
  return (
    <div className="add-employee-container">
      <h2>Add Employee</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <input placeholder="Enter First Name"></input>
        <input placeholder="Enter last Name"></input>
      </div>
      <input type="text" placeholder="Image Url"></input>
      <input type="email" placeholder="Enter Your Email"></input>
      <input type="telephone" placeholder="Enter Contact Number"></input>
      <input type="number" placeholder="Salary"></input>
      <input type="text" placeholder="address"></input>
      <input type="date"></input>
    </div>
  );
};

export default AddEmployeeContainer;
