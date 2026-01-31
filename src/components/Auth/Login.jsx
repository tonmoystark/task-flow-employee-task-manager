import React, { useState } from "react";
import AuthContext from "../../context/AuthContext";

const Login = ({ handleUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    handleUser(email, password);
    setEmail("");
    setPassword("");
  }

  return (
    <div
      className="h-screen w-full flex justify-center items-center bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617]
 text-white"
    >
      <div
        className="border-2 border-slate-700 p-20 bg-gradient-to-br from-[#020617] via-[#1e293b] to-[#020617]


 rounded-lg"
      >
        <form onSubmit={(e) => submitHandler(e)} className="flex flex-col">
          <input
            type="email"
            className="outline-none px-4 py-2 border rounded my-1 border-slate-500 w-full placeholder:text-white"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />
          <input
            type="password"
            className="outline-none px-4 py-2 border rounded my-1 border-slate-500 w-full placeholder:text-white"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
          <button
            type="submit"
            className="
                bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600
                mt-2 rounded-lg py-2 px-6 text-white font-semibold
                shadow-lg shadow-emerald-500/30
                transition-all duration-300 ease-out
                hover:from-emerald-600 hover:via-emerald-700 hover:to-teal-700
                hover:shadow-emerald-500/50 hover:brightness-110
                active:scale-95
              "
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
