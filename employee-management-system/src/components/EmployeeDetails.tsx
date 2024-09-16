import React from "react";
import "../css/activeEmployee.css";

const EmployeeDetails = ({ activeEmployee }) => {
  const { contactNumber, firstName, lastName, imageUrl, email } =
    activeEmployee;
  return (
    <div className="active-employee-wrapper">
      <img src={imageUrl} className="employee-image" />
      <span>{`${firstName} ${lastName}`}</span>
      <span>{contactNumber}</span>
      <span>{email}</span>
    </div>
  );
};

export default EmployeeDetails;
