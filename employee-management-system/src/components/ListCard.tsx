import React, { useContext, useEffect, useState } from "react";
import "../css/listCard.css";
import { EmployeeContext } from "../context/EmployeeContext";

interface ListCardProps {
  employeeName: string;
  dataSet: Number;
}

const ListCard: React.FC<ListCardProps> = ({ employee }) => {
  const { employees, setEmployees } = useContext(EmployeeContext);
  const [activeEmployee, setActiveEmployee] = useState(employees[0]);
  const handleEmployeeDelete = (event) => {
    event?.stopPropagation();
    const employeeId = Number(event.currentTarget.parentElement?.dataset.id);
    setEmployees(employees.filter((employee) => employee.id !== employeeId));
  };

  const handleEmployeeClick = (event) => {
    event.stopPropagation();
    // Use find instead of filter to get a single employee object
    const selectedEmployee = employees.find(
      (employee) => employee.id === Number(event.currentTarget.dataset.id)
    );

    setActiveEmployee(selectedEmployee || employees[0]);
  };

  useEffect(() => {
    // console.log("###");s
  }, [activeEmployee]);

  const { firstName, lastName, id } = employee;

  return (
    <div
      className="employee-list-wrapper"
      data-id={id}
      onClick={handleEmployeeClick}
    >
      <span>
        {firstName} {lastName}
      </span>
      <span onClick={handleEmployeeDelete}>delete</span>
    </div>
  );
};

export default ListCard;
