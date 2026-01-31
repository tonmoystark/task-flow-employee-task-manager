import React, { useContext } from "react";
import { authentication } from "../../context/AuthContext";

const AllTask = () => {
  const authData = useContext(authentication);
  return (
    <div
      id="allTask"
      className="bg-linear-to-b from-[#111827] to-[#020617] h-full flex flex-col gap-2  p-5 rounded"
    >
      <div
        className="
                bg-linear-to-r from-[#1e293b] via-[#0f172a] to-[#020617]
                py-3 px-4 flex justify-between rounded-lg
                border border-white/10 shadow-md
                text-slate-200 font-semibold
              "
      >
        <h3 className="w-1/5 text-center">Employees</h3>
        <h3 className="w-1/5 text-center text-sky-400">New Task</h3>
        <h3 className="w-1/5 text-center text-indigo-400">Active</h3>
        <h3 className="w-1/5 text-center text-emerald-400">Completed</h3>
        <h3 className="w-1/5 text-center text-rose-400">Failed</h3>
      </div>

      <div className="h-[80%] flex flex-col gap-2">
        {authData.employees.map((emp, idx) => {
          return (
            <div
              className="
                    bg-linear-to-r from-slate-800 to-slate-900
                    py-3 px-4 flex justify-around gap-2 rounded-lg
                    shadow-lg
                    transition-all duration-300 ease-out
                    hover:from-slate-700 hover:to-slate-800
                    hover:shadow-xl hover:scale-[1.01]
                  "
              key={idx}
            >
              <h3
                className="
                      w-1/5 text-center rounded
                      bg-linear-to-r from-slate-200 to-slate-300
                      text-slate-900 font-bold
                      transition-colors duration-300
                      hover:from-white hover:to-slate-200
                    "
              >
                {emp.firstName}
              </h3>

              <h3 className="w-1/5 text-center rounded bg-linear-to-r from-cyan-500 to-sky-500 text-white font-bold">
                {emp.taskCounts.newTask}
              </h3>

              <h3 className="w-1/5 text-center rounded bg-linear-to-r from-purple-500 to-indigo-500 text-white font-bold">
                {emp.taskCounts.active}
              </h3>

              <h3 className="w-1/5 text-center rounded bg-linear-to-r from-green-500 to-emerald-500 text-white font-bold">
                {emp.taskCounts.completed}
              </h3>

              <h3 className="w-1/5 text-center rounded bg-linear-to-r from-red-500 to-pink-500 text-white font-bold">
                {emp.taskCounts.failed}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
