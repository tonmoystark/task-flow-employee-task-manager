import { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const authentication = createContext(null);

const AuthContext = ({ children }) => {
  // ⛔ keep auth data untouched
  const [user, setUser] = useState(null);

  // ✅ make employees reactive (THIS is the fix)
  const [employees, setEmployees] = useState([]);

  const [admin, setAdmin] = useState([]);

  // load once (same as before)
  useEffect(() => {
    setLocalStorage();
    const data = getLocalStorage();

    setEmployees(data.employees || []);
    setAdmin(data.admin || []);
  }, []);

  // 🔑 sync employees to localStorage
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  return (
    <authentication.Provider
      value={{
        user,
        setUser,      // auth untouched
        employees,
        setEmployees, // only thing CreateTask needs
        admin,
      }}
    >
      {children}
    </authentication.Provider>
  );
};

export default AuthContext;
