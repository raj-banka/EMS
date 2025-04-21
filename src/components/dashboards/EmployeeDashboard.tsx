import Header from '../others/Header'
import TaskListNumber from '../Tasks/TaskListNumber'
import TaskList from '../Tasks/TaskList'
import { UserType } from "../../Interfaces/UserType";

interface EmployeeDashboardProps {
  data: UserType | null; 
  changeUser: React.Dispatch<React.SetStateAction<'admin' | 'user' | null>>;
}
const EmployeeDashboard : React.FC<EmployeeDashboardProps> = ({data , changeUser}) =>{
  return (
    <div className='text-white bg-[#1C1C1C] h-screen w-full'>
      < Header changeUser = {changeUser} data={data}/>
      <TaskListNumber data = {data}/>
      <TaskList data = {data}/>
    </div>
  )
}

export default EmployeeDashboard
