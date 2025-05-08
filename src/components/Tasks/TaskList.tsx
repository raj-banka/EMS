import AcceptedTask from "./AcceptedTask"
import CompletedTask from "./CompletedTask"
import FailedTask from "./FailedTask"
import NewTask from "./NewTask"
import { useEffect, useState, useCallback } from "react";
import { TaskType, UserType } from '../../Interfaces/UserType'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { setUserData } from "../../Features/AuthSlice";

interface TaskListProps {
  data: UserType | null; 
}
const TaskList: React.FC<TaskListProps> = ({data}) => {
  const userData = useSelector((state:RootState) => state.authInfo);
  const dispatch = useDispatch();
  
  // Use a function to get the latest employee data directly from Redux store
  const getEmployeeData = useCallback(() => {
    if (!userData || !data) return undefined;
    return userData.employees.find((e:UserType) => e.id === data.id);
  }, [userData, data]);
  
  // Get fresh employee data from Redux
  const employeeData = getEmployeeData();

  const handleAcceptTask = (taskToUpdate : TaskType, status : string) => {
    if(!employeeData) return;
    
    const updatedTasks = employeeData.tasks.map(task => {
      if (task === taskToUpdate) {
        return {
          ...task,
          newTask: false,
          active: status === "active",
          completed: status === "completed",
          failed: status === "failed",
        }
      }
      return task;
    });

    const newCount = {
      newTask: 0,
      active: 0,
      completed: 0,
      failed: 0
    }

    updatedTasks?.forEach(task => {
      if(task.newTask) newCount.newTask++;
      else if(task.active) newCount.active++;
      else if(task.completed) newCount.completed++;
      else if(task.failed) newCount.failed++;
    });
    
    const updatedEmployee: UserType = {
      ...employeeData,
      tasks: updatedTasks,
      taskCount: newCount
    }
    
    if(!userData) return;
    
    const updatedUserData = {
      ...userData,
      employees: userData.employees.map((emp) =>
        (emp.id === employeeData?.id) ? updatedEmployee : emp)
    };
    
    // Update Redux store
    dispatch(setUserData(updatedUserData));
  };
  
  // Save to localStorage whenever Redux state changes
  useEffect(() => {
    if (userData?.employees) {
      localStorage.setItem("employees", JSON.stringify(userData.employees));
    }
  }, [userData?.employees]);
  
  // Force re-render when Redux state changes
  const [, forceUpdate] = useState({});
  useEffect(() => {
    const timer = setInterval(() => forceUpdate({}), 1000); // Check for updates every second
    return () => clearInterval(timer);
  }, []);
  
  if (!employeeData) return <div>Loading tasks...</div>;
  
  return (
    <div 
     id='tasklist' className='flex w-full overflow-x-auto flex-nowrap p-5 mt-5 h-[55%] gap-5 justify-start items-center'>
      {
        employeeData.tasks.map((t:TaskType, idx:number) => {
          if (t.newTask) return <NewTask key={idx} data={t} onAccept={handleAcceptTask} />;
          if (t.active) return <AcceptedTask key={idx} data={t} onAccept={handleAcceptTask} />;
          if (t.completed) return <CompletedTask key={idx} data={t} />;
          if (t.failed) return <FailedTask key={idx} data={t} />;
          return null;
        })
      }
    </div>
  );
};

export default TaskList;
