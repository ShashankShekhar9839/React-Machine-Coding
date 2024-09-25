import React, { Children, createContext, useContext, useState } from "react";
import { data } from "../data/data";

// creating a context
export const EmployeeContext = createContext();

// creating a provider

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState(data);

  return (
    <EmployeeContext.Provider value={{ employees, setEmployees }}>
      {children}
    </EmployeeContext.Provider>
  );
};
