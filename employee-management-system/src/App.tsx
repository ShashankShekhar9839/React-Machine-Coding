import { useContext, useEffect, useState } from "react";
import "./App.css";
import ListCard from "./components/ListCard";
import { data } from "../src/data/data.js";
import { EmployeeContext } from "./context/EmployeeContext.js";
import EmployeeList from "./components/EmployeeList.js";
import AddEmployeeContainer from "./components/AddEmployeeContainer.js";

function App() {
  const { employees, setEmployees } = useContext(EmployeeContext);
  const [addNewEmployee, setAddNewEmployee] = useState(false);
  useEffect(() => {
    console.log(employees);
  }, [employees]);
  const handleAddNewEmployee = () => {
    setAddNewEmployee(true);
  };
  const handleClose = () => {
    setAddNewEmployee(false);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid red",
        padding: "30px",
      }}
    >
      <button
        onClick={handleAddNewEmployee}
        style={{
          alignSelf: "flex-start",
          marginLeft: "80px",
          background: "red",
          border: "none",
          padding: "10px",
          color: "white",
          fontWeight: "bolder",
          cursor: "pointer",
          textAlign: "center",
          borderRadius: "6px",
        }}
      >
        Add New Employee
      </button>
      <EmployeeList />
      {addNewEmployee && (
        <div
          style={{
            height: "auto",
            position: "fixed",
            padding: "20px",
            background: "green",
            top: "20px",
          }}
        >
          <span
            onClick={handleClose}
            style={{
              height: "40px",
              width: "40px",
              borderRadius: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              background: "black",
              position: "absolute",
              right: "0",
              top: "-20px",
            }}
          >
            x
          </span>
          <AddEmployeeContainer />
        </div>
      )}
    </div>
  );
}

export default App;
