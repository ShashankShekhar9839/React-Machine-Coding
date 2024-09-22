import { useContext, useEffect, useState } from "react";
import "./App.css";
import ListCard from "./components/ListCard";
import { data } from "../src/data/data.js";
import { EmployeeContext } from "./context/EmployeeContext.js";
import EmployeeList from "./components/EmployeeList.js";
import AddEmployeeContainer from "./components/AddEmployeeContainer.js";

function App() {
  const { employees, setEmployees } = useContext(EmployeeContext);
  useEffect(() => {
    console.log(employees);
  }, [employees]);
  return (
    <div>
      <EmployeeList />
      <AddEmployeeContainer />
    </div>
  );
}

export default App;
