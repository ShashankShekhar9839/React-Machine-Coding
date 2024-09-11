import { useEffect, useState } from "react";
import "./App.css";
import ListCard from "./components/ListCard";
import { data } from "../src/data/data.js";

function App() {
  const [employeeList, setEmployeeList] = useState(data);
  useEffect(() => {
    console.log(employeeList);
  }, [employeeList]);
  return (
    <div>
      {/* {employeeList.map((employee) => (
        <ListCard employeeName={employee.firstName} />
      ))} */}
    </div>
  );
}

export default App;
