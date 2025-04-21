import Header from "../others/Header";
import CreateTask from '../others/CreateTask'
import AllTask from "../Tasks/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full  text-white bg-[#1C1C1C]">
      <Header data={props.data} changeUser = {props.changeUser}/>
     <CreateTask  />
     <AllTask />
    </div>
  );
};

export default AdminDashboard;
