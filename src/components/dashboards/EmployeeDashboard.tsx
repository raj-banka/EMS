import Header from '../others/Header'
import TaskListNumber from '../Tasks/TaskListNumber'
import TaskList from '../Tasks/TaskList'
import { UserType } from "../../Interfaces/UserType";
import { useParams , useLocation } from 'react-router';

interface EmployeeDashboardProps {
  data?: UserType | null; 
  changeUser?: React.Dispatch<React.SetStateAction<'admin' | 'user' | null | undefined>>;
}
const EmployeeDashboard : React.FC<EmployeeDashboardProps> = ({data, changeUser}) =>{
  const {id} = useParams();
  console.log(id,"raj");
  const {state} = useLocation();
  
  const emp = state ? state : data;
  const user = state ? "":changeUser
  return (
    <div className='text-white bg-[#1C1C1C] h-screen w-full'>
      < Header changeUser = {user} data={emp}/>
      <TaskListNumber data = {emp}/>
      <TaskList data = {emp}/>
    </div>
  )
}

export default EmployeeDashboard
