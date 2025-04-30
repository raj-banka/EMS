// import React, { useContext } from "react";
import { useState } from "react";
// import { AuthContext } from "../../context/Context";
import { ContextType, UserType } from "../../Interfaces/UserType";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

// interface UserType{
//   name : string;
//   email : string;
//   password : string;
//   id : number;
//   // [key : string] : number | string | boolean,
//   taskCount : {
//    active : number,
//    newTask : number,
//    completed : number,
//    failed : number
//   },
//   tasks : {
//     title : string,
//     date : string,
//     description : string,
//     categories : string,
//     active : boolean,
//     newTask : boolean,
//     completed : boolean,
//     failed : boolean
//   }[]
 
// }

// interface ContextType {
//   employees : UserType[],
//   admin : UserType[]
// }

const  CreateTask : React.FC = ()=> {

  const [title , setTitle]  = useState("");
  const [date , setDate] = useState(()=>{
    const today = new Date().toISOString().split("T")[0]; // format to 'YYYY-MM-DD'
      return today;
  });
  const [description , setDescription] = useState("");
  const [categories , setCategories] = useState("");
  const [assignedTo , setAssignedTo] = useState("");
  // const [newTask , setNewTask] = useState({});
  
  // const [userData , setUserData ] = useContext(AuthContext)as [ContextType | null, React.Dispatch<React.SetStateAction<ContextType> | null>];
const userData= useSelector((state:RootState) => state.authInfo);
const dispatch = useDispatch();
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  
    const task = {
      title,
      date,
      description,
      categories,
      active: false,
      newTask: true,
      completed: false,
      failed: false
    };
    console.log(userData , "check2")
  
    const updatedEmployees = userData?.employees?.map((emp:UserType) => {
      if (emp.name === assignedTo) {
        const updateCount = {
          ...emp.taskCount,
          newTask: emp.taskCount.newTask + 1
        }
        return {
          ...emp,
          tasks: [...emp.tasks, task],
          taskCount: updateCount
        };
      }
      return emp;
    }) || [];

    console.log(updatedEmployees , "check2")
  
    if (!userData) return; 
    const updatedUserData : ContextType= { ...userData, employees: updatedEmployees };
    // setUserData(updatedUserData);
    dispatch({type : 'UPDATE_USER_DATA' , payload:updatedUserData});
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    // console.log(userData);
  
    // Clear form
    setTitle("");
    setDate("");
    setDescription("");
    setCategories("");
    setAssignedTo("");
  };
  
    return (
<div className="mt-3 p-3 bg-[#3b3b3b] rounded w-[70%] ml-[17%] ">
<form 
onSubmit={(e) => submitHandler(e)}
className="flex w-full flex-wrap justify-between items-star">
  <div className="w-1/2 ml-10">
    <div>
      <h3 className="text-sm text-white mb-0.5">Task Title</h3>
      <input
      required
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
        className="text-sm text-white py-1 px-2 width-4/5 rounded outline-none bg-transparent border-2 border-gray-400 mb-4"
        type="text"
        placeholder="Enter task title"
      />
    </div>
    <div>
      <h3 className="text-sm text-white mb-0.5">date</h3>
      <input
      value={date}
      onChange={(e)=>setDate(e.target.value)}
        className="text-sm text-white py-1 px-2 width-4/5 rounded outline-none bg-transparent border-2 border-gray-400 mb-4"
        type="date"
      />
    </div>
    <div>
  <h3 className="text-sm text-white mb-0.5">Assigned to</h3>
  <select
  required
    value={assignedTo}
    onChange={(e) => setAssignedTo(e.target.value)}
    className="text-sm text-white py-1 px-2 width-4/5 rounded outline-none border-2 border-gray-400 mb-4 bg-[#2c2c2c]"
  >
    <option className="bg-[#2c2c2c] text-white" value="">Select an employee</option>
    {userData?.employees.map((employee:UserType, index:number) => (
      <option className="bg-[#2c2c2c] text-white" key={index} value={employee.name}>
        {employee.name}
      </option>
    ))}
  </select>
</div>

    <div>
      <h3 className="text-sm text-white mb-0.5">Categories</h3>
      <input
      required
      value={categories}
      onChange={(e)=>setCategories(e.target.value)}
        className="text-sm text-white py-1 px-2 width-4/5 rounded outline-none bg-transparent border-2 border-gray-400 mb-4"
        type="text"
        placeholder="dev,design etc"
      />
    </div>
  </div>
  <div className="w-2/5 flex flex-col items-start pl-5">
    <h3 className="text-sm text-white mb-0.5">Description</h3>
    <textarea
    required
    value={description}
    onChange={(e)=>setDescription(e.target.value)}
      className="w-full h-44 text-sm text-white py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
    ></textarea>
    <button className="py-3 cursor-pointer bg-emerald-500 hover:bg-emerald-600 px-5 rounded text-sm  w-full">
      Create Task
    </button>
  </div>
</form>
</div>
    );
}
export default CreateTask;