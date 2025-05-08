import { useState, useEffect } from "react"
import EmployeeDashboard from "../dashboards/EmployeeDashboard";
import { UserType } from "../../Interfaces/UserType";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { useNavigate } from "react-router";

const AllTask = () => {
  const userData = useSelector((state:RootState) => state.authInfo);
  const [selectedEmp, setSelectedEmp] = useState<UserType | null>(null);
  const navigate = useNavigate();
  
  // Force re-render to keep UI in sync with Redux store
  const [, forceUpdate] = useState({});
  useEffect(() => {
    const timer = setInterval(() => forceUpdate({}), 1000); // Check for updates every second
    return () => clearInterval(timer);
  }, []);
  
  const handleClick = (e : UserType) => {
    setSelectedEmp(e);
    navigate(`/user/emp`, {state : e});
  }
  
  return (
    <>
      <div className="bg-[#2a2929] p-5 rounded mt-4">
        <div className="flex justify-between p-2 bg-red-300 mb-2 rounded gap-1">
          <h2 className="text-lg font-medium w-1/5">Emp Name</h2>
          <h2 className="text-lg font-medium w-1/5 ">New Task</h2>
          <h2 className="text-lg font-medium w-1/5 ">Active Task</h2>
          <h2 className="text-lg font-medium w-1/5 ">Completed Task</h2>
          <h2 className="text-lg font-medium w-1/5 ">Failed Task</h2>
        </div>
        <div id="alltask" className="">
          {userData?.employees.map((e, idx) => {
            // Get the most up-to-date employee data from Redux
            const employee = userData.employees.find(emp => emp.id === e.id) || e;
            
            return (
              <div key={idx} 
                onClick={() => handleClick(employee)}
                className="flex justify-between p-2 mb-2 rounded gap-1 hover:bg-gray-600 cursor-pointer">
                <h2 className="text-lg font-medium w-1/5 text-red-400">{employee.name}</h2>
                <h2 className="text-lg font-medium w-1/5 text-yellow-400">{employee.taskCount.newTask}</h2>
                <h2 className="text-lg font-medium w-1/5 text-blue-400">{employee.taskCount.active}</h2>
                <h2 className="text-lg font-medium w-1/5 text-green-400">{employee.taskCount.completed}</h2>
                <h2 className="text-lg font-medium w-1/5 text-red-400">{employee.taskCount.failed}</h2>
              </div>
            )
          })}
          
          {selectedEmp ? (
            <EmployeeDashboard
              data={selectedEmp}
              changeUser={() => setSelectedEmp(null)}
            />
          ) : (
            <div className="bg-[#2a2929] p-5 rounded mt-4">
              {/* ...rest of your employee list rendering... */}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default AllTask
