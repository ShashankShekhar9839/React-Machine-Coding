import React, { useContext, useEffect, useState } from "react";
import "../css/listCard.css";
import { EmployeeContext } from "../context/EmployeeContext";
import EmployeeDetails from "./EmployeeDetails";

interface ListCardProps {
  employeeName: string;
  onEmpoyeeClick: (employee: any) => void;
}

const ListCard: React.FC<ListCardProps> = ({ employee, onEmployeeClick }) => {
  const { firstName, lastName, id } = employee;
  const { setEmployees } = useContext(EmployeeContext);

  const handleEmployeeDelete = (event) => {
    event?.stopPropagation();
    const employeeId = Number(event.currentTarget.parentElement?.dataset.id);
    setEmployees((prevEmployees) =>
      prevEmployees.filter((emp) => emp.id !== employeeId)
    );
  };

  return (
    <div
      className="employee-list-wrapper"
      data-id={id}
      onClick={() => onEmployeeClick(employee)}
    >
      <span>
        {firstName} {lastName}
      </span>
      <span onClick={handleEmployeeDelete}>delete</span>
    </div>
  );
};

export default ListCard;
