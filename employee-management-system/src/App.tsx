import { useContext, useEffect, useState } from "react";
import "./App.css";
import ListCard from "./components/ListCard";
import { data } from "../src/data/data.js";
import { EmployeeContext } from "./context/EmployeeContext.js";
import EmployeeList from "./components/EmployeeList.js";

function App() {
  const { employees, setEmployees } = useContext(EmployeeContext);
  useEffect(() => {
    console.log(employees);
  }, [employees]);
  return (
    <div>
      <EmployeeList />
    </div>
  );
}

export default App;
