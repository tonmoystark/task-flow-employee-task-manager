import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";
import Header from "../others/Header";

export const AdminDashboard = ({changeUser}) => {
  return (
    <div className="w-full bg-black">
      <Header changeUser={changeUser}/>
      <CreateTask />
      <AllTask />
    </div>
  );
};
