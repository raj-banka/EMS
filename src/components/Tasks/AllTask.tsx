import { AuthContext } from "../../context/AuthProvider"
import { useContext, useState } from "react"
import EmployeeDashboard from "../dashboards/EmployeeDashboard";

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

interface ContextType {
  employees : UserType[],
  admin : UserType[]
}


const AllTask = () => {
 const [userData ] = useContext(AuthContext)as [ContextType | null, React.Dispatch<React.SetStateAction<ContextType> | null>];
 
 const [selectedEmp, setSelectedEmp] = useState<UserType | null>(null);
  return (
    <>
    {/* <h2 className="text-3xl font-bold mb-2">All Tasks</h2> */}
    <div className="bg-[#2a2929] p-5 rounded mt-4">
      <div className="flex justify-between p-2 bg-red-300 mb-2 rounded gap-1">
        <h2 className="text-lg font-medium w-1/5">Emp Name</h2>
        <h2 className="text-lg font-medium w-1/5 ">New Task</h2>
        <h2 className="text-lg font-medium w-1/5 ">Active Task</h2>
        <h2 className="text-lg font-medium w-1/5 ">Completed Task</h2>
        <h2 className="text-lg font-medium w-1/5 ">Failed Task</h2>
      </div>
      <div id="alltask"  className="">
    {userData?.employees.map((e , idx)=>{
    return(
      <div key={idx} 
      onClick={() => setSelectedEmp(e)}
      className="flex justify-between p-2 mb-2 rounded gap-1 hover:bg-gray-600 cursor-pointer">
        <h2 className="text-lg font-medium w-1/5 text-red-400">{e.name}</h2>
        <h2 className="text-lg font-medium w-1/5 text-yellow-400">{e.taskCount.newTask}</h2>
        <h2 className="text-lg font-medium w-1/5 text-blue-400">{e.taskCount.active}</h2>
        <h2 className="text-lg font-medium w-1/5 text-green-400">{e.taskCount.completed}</h2>
        <h2 className="text-lg font-medium w-1/5 text-red-400">{e.taskCount.failed}</h2>
      </div>
    )
  })}
  {selectedEmp && 
  (
  <EmployeeDashboard
    data={selectedEmp}
    changeUser={() => setSelectedEmp(null)} // back or clear
  />
)}

  </div>
   </div>
    </>
  )
}

export default AllTask
