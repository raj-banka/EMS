import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const TaskListNumber = ({data}) => {
  const [userData , setUserData] = useContext(AuthContext);
  const user = userData.employees.find((e) => e.id === data.id) ;
  return (
    <div className="flex mt-10 justify-between gap-5 w-full px-5 text-black">
    <div className='bg-green-300 w-[45%] py-6 px-9 rounded-2xl'>
      <h2 className='text-3xl font-semibold'>{user.taskCount.active}</h2>
      <h3 className='text-xl font-medium'>Active</h3>
    </div>
    <div className='bg-green-600 w-[45%] py-6 px-9 rounded-2xl'>
      <h2 className='text-3xl font-semibold'>{user.taskCount.completed}</h2>
      <h3 className='text-xl font-medium'>Completed</h3>
    </div>
    <div className='bg-yellow-200 w-[45%] py-6 px-9 rounded-2xl'>
      <h2 className='text-3xl font-semibold'>{user.taskCount.newTask}</h2>
      <h3 className='text-xl font-medium'>New Task</h3>
    </div>
    <div className='bg-red-500 w-[45%] py-6 px-9 rounded-2xl'>
      <h2 className='text-3xl font-semibold'>{user.taskCount.failed}</h2>
      <h3 className='text-xl font-medium'>Failed</h3>
    </div>
    </div>
  )
}

export default TaskListNumber
