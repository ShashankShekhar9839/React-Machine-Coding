import React, { useContext, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import "../css/addEmployee.css";

interface AddEmployeeContainerProps {}

const AddEmployeeContainer: React.FC<AddEmployeeContainerProps> = () => {
  const { employees, setEmployees } = useContext(EmployeeContext);
  const [newEmployee, setNewEmployee] = useState({
    id: "",
    imageUrl: "",
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    age: "",
    dob: "",
    salary: "",
    address: "",
  });

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewEmployee({
      ...newEmployee,
      firstName: event.target.value,
    });
  };

  const handleAddEmployee = () => {
    setEmployees([...employees, newEmployee]);
  };

  return (
    <div className="add-employee-container">
      <h2>Add New Employee</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          placeholder="Enter First Name"
          onChange={handleFirstNameChange}
        ></input>
        <input placeholder="Enter last Name"></input>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <input type="text" placeholder="Image Url"></input>
        <input type="email" placeholder="Enter Your Email"></input>
        <input type="telephone" placeholder="Enter Contact Number"></input>
        <input type="number" placeholder="Salary"></input>
        <input type="text" placeholder="address"></input>
        <input type="date" placeholder="DOB"></input>
        <input type="text" placeholder="age"></input>
      </div>
      <button className="submit-button" onClick={handleAddEmployee}>
        SUBMIT
      </button>
    </div>
  );
};

export default AddEmployeeContainer;
