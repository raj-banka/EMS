import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../Tasks/AllTask";
import { UserType } from "../../Interfaces/UserType";

interface AdminDashboardProps {
  data: UserType | null; 
  changeUser: React.Dispatch<React.SetStateAction<'admin' | 'user' | null>>;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ data, changeUser }) => {
  return (
    <div className="h-screen w-full text-white bg-[#1C1C1C]">
      <Header data={data} changeUser={changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
