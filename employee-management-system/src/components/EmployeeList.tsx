import React, { useContext, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import ListCard from "./ListCard";
import EmployeeDetails from "./EmployeeDetails";

const EmployeeList: React.FC = () => {
  const { employees } = useContext(EmployeeContext);
  const [activeEmployee, setActiveEmployee] = useState(employees[0]);

  const handleEmployeeClick = (employee) => {
    setActiveEmployee(employee);
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div className="employee-list">
        {employees.map((employee) => (
          <ListCard
            key={employee.id}
            employee={employee}
            onEmployeeClick={handleEmployeeClick}
          />
        ))}
      </div>
      {activeEmployee && (
        <div className="employee-details">
          <EmployeeDetails activeEmployee={activeEmployee} />
        </div>
      )}
    </div>
  );
};

export default EmployeeList;
