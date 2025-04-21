import AcceptedTask from "./AcceptedTask"
import CompletedTask from "./CompletedTask"
import FailedTask from "./FailedTask"
import NewTask from "./NewTask"
import { useState ,useContext, useEffect} from "react";
import { AuthContext } from "../../context/Context"
import{ContextType,TaskType,UserType} from '../../Interfaces/UserType'

// interface TaskType {
//   title : string,
//   date : string,
//   description : string,
//   categories : string,
//   active : boolean,
//   newTask : boolean,
//   completed : boolean,
//   failed : boolean
// }

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
//   tasks : TaskType[]
// }



// interface ContextType {
//   employees : UserType[],
//   admin : UserType[]
// }
interface TaskListProps {
  data: UserType | null; 
}
const TaskList: React.FC<TaskListProps> = ({data}  ) => {
  const [employeeData, setEmployeeData] = useState(data);
  const [userData , setUserData ] = useContext(AuthContext)as [ContextType | null, React.Dispatch<React.SetStateAction<ContextType> | null>];

  const handleAcceptTask = (taskToUpdate : TaskType, status : string) => {

    if(!employeeData) return;
    const updatedTasks  = employeeData.tasks.map(task => {
      if (task === taskToUpdate) {
        console.log(task)
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
      newTask : 0,
      active : 0,
      completed : 0,
      failed : 0
    }

    updatedTasks?.forEach(task => {
      if(task.newTask) newCount.newTask++;
      else if(task.active) newCount.active++;
      else if(task.completed) newCount.completed++;
      else if(task.failed) newCount.failed++;
    });
    console.log(newCount)
    const updatedEmployee : UserType = {
      ...employeeData ,
       tasks : updatedTasks , 
       taskCount : newCount
      }
    setEmployeeData(updatedEmployee);
    console.log(employeeData)
    // console.log(userData);
    if(!userData) return;
    setUserData({
      ...userData,
      employees : userData.employees.map((emp)=>
        (emp.id === employeeData?.id) ? updatedEmployee : emp)
    });
    // console.log(userData)
  };

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(userData?.employees));
  }, [userData?.employees]);
  
  return (
    <div id='tasklist' className='flex w-full overflow-x-auto flex-nowrap p-5 mt-5 h-[55%] gap-5 justify-start items-center'>
      {
        employeeData?.tasks.map((t:TaskType, idx:number) => {
          if (t.active) return <AcceptedTask key={idx} data={t} onAccept={handleAcceptTask} />;
          if (t.newTask) return <NewTask key={idx} data={t} onAccept={handleAcceptTask} />;
          if (t.completed) return <CompletedTask key={idx} data={t} />;
          if (t.failed) return <FailedTask key={idx} data={t} />;
        })
      }
    </div>
  );
};

export default TaskList;
