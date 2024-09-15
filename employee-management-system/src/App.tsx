import { useContext, useEffect, useState } from "react";
import "./App.css";
import ListCard from "./components/ListCard";
import { data } from "../src/data/data.js";
import { EmployeeContext } from "./context/EmployeeContext.js";

function App() {
  const { employees, setEmployees } = useContext(EmployeeContext);
  useEffect(() => {
    console.log(employees);
  }, [employees]);
  return (
    <div>
      {employees.map((employee: object) => (
        <ListCard
         employee={employee}
        />
      ))}
    </div>
  );
}

export default App;
