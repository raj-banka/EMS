import React from "react";
import { useState } from "react";
const  CreateTask : React.FC = ()=> {
  const [title , setTitle] = useState("");
  const [date , setDate] = useState("");
  const [description , setDescription] = useState("");
  const [categories , setCategories] = useState("");
  const [assignedTo , setAssignedTo] = useState("");
  const submitHandler = (e : React.FormEvent)=>{
    e.preventDefault();
    console.log(title , date , description , categories , assignedTo);
    setTitle("");
    setDate("");
    setDescription("");
    setCategories("");
    setAssignedTo("");
  }
    return (
<div className="mt-3 p-3 bg-[#3b3b3b] rounded w-[70%] ml-[17%] ">
<form 
onSubmit={(e) => submitHandler(e)}
className="flex w-full flex-wrap justify-between items-star">
  <div className="w-1/2 ml-10">
    <div>
      <h3 className="text-sm text-white mb-0.5">Task Title</h3>
      <input
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
      <input
      value={assignedTo}
      onChange={(e)=>setAssignedTo(e.target.value)}
        className="text-sm text-white py-1 px-2 width-4/5 rounded outline-none bg-transparent border-2 border-gray-400 mb-4"
        type="text"
        placeholder="Enter employee name"
      />
    </div>
    <div>
      <h3 className="text-sm text-white mb-0.5">Categories</h3>
      <input
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