import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AdminDashboard } from "./components/Dashboard/AdminDashboard";
import { authentication } from "./context/AuthContext";

const App = () => {
  const authData = useContext(authentication);

  const [userRole, setUserRole] = useState(null);
  const [employeeData, setEmployeeData] = useState(null);

  // Restore login on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserRole(parsedUser.role);
      if (parsedUser.role === "employee") {
        setEmployeeData(parsedUser.data);
      }
    }
  }, []);

  const handleUser = (email, password) => {
    // Admin login
    if (email === "admin@company.com" && password === "123") {
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin" })
      );
      setUserRole("admin");
      return;
    }

    // Wait for authData
    if (!authData || !authData.employees) {
      alert("Data is loading, try again");
      return;
    }

    // Employee login
    const employee = authData.employees.find(
      (e) => e.email === email && e.password === password
    );

    if (employee) {
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employee })
      );
      setUserRole("employee");
      setEmployeeData(employee);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {!userRole && <Login handleUser={handleUser} />}

      {userRole === "admin" && <AdminDashboard changeUser = {setUserRole} />}

      {userRole === "employee" && (
        <EmployeeDashboard changeUser = {setUserRole} data={employeeData} />
      )}
    </>
  );
};

export default App;
