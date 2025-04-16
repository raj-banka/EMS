import Header from "../../others/Header";
import CreateTask from '../../others/CreateTask'

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full  text-white bg-[#1C1C1C]">
      <Header />
     <CreateTask />
    </div>
  );
};

export default AdminDashboard;
