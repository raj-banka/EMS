import Header from '../others/Header'
import TaskListNumber from '../Tasks/TaskListNumber'
import TaskList from '../Tasks/TaskList'

function EmployeeDashboard({data , changeUser}) {
  return (
    <div className='text-white bg-[#1C1C1C] h-screen w-full'>
      < Header changeUser = {changeUser} data={data}/>
      <TaskListNumber data = {data}/>
      <TaskList data = {data}/>
    </div>
  )
}

export default EmployeeDashboard
