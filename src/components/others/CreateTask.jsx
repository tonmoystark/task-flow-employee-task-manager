import React, { useContext, useState } from "react";
import { authentication } from "../../context/AuthContext";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [newTask, setNewTask] = useState({})

  const {setEmployees} = useContext(authentication);

const submitHandler = (e) => {
  e.preventDefault();

  // create task object ONCE
  const task = {
    taskTitle,
    taskDate,
    category,
    taskDescription,
    active: false,
    newTask: true,
    failed: false,
    completed: false,
  };

  // update state (optional)
  setNewTask(task);

  const data = JSON.parse(localStorage.getItem("employees"));

  data.forEach((elem) => {
    if (elem.firstName.toLowerCase() === assignTo.toLowerCase()) {
      elem.tasks.push(task); // ✅ NOT newTask
    }
  });
  setEmployees(data);
  console.log(data);
  // reset inputs
  setTaskTitle("");
  setTaskDate("");
  setAssignTo("");
  setCategory("");
  setTaskDescription("");
};


  return (
    <div>
      <form
        onSubmit={(e) => submitHandler(e)}
        className="w-full p-5 md:p-10 text-white bg-linear-to-b from-[#0b0f19] to-[#111827] flex flex-col lg:flex-row items-center gap-10"
      >
        {/* Left section */}
        <div className="w-full lg:w-1/2">
          <h3>Task Title</h3>
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="lg:w-[80%] w-full rounded-lg border-emerald-600 border px-4 py-2 text-white"
            placeholder="Write your task"
          />

          <h3 className="mt-3">Date</h3>
          <input
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            type="date"
            className="lg:w-[80%] w-full rounded-lg border-emerald-600 border px-4 py-2 text-white"
          />

          <h3 className="mt-3">Assign to</h3>
          <input
            type="text"
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
            className="lg:w-[80%] w-full rounded-lg border-emerald-600 border px-4 py-2 text-white"
            placeholder="Employee name"
          />

          <h3 className="mt-3">Category</h3>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="lg:w-[80%] w-full rounded-lg border-emerald-600 border px-4 py-2 text-white"
            placeholder="Design, dev etc"
          />
        </div>

        {/* Right section */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h3>Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="border-emerald-600 border rounded-lg p-3 text-white lg:w-[80%] w-full grow"
            rows="8"
          ></textarea>

          <button
            type="submit"
            className="bg-green-600 lg:w-[80%] w-full py-2 rounded-lg font-semibold mt-3 hover:bg-green-700 cursor-pointer"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
