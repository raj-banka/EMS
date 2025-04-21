import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../Tasks/AllTask";

interface UserType{
  name : string;
  email : string;
  password : string;
  id : number;
  // [key : string] : number | string | boolean,
  taskCount : {
   active : number,
   newTask : number,
   completed : number,
   failed : number
  },
  tasks : {
    title : string,
    date : string,
    description : string,
    categories : string,
    active : boolean,
    newTask : boolean,
    completed : boolean,
    failed : boolean
  }[]
}

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
