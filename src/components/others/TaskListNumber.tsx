
const TaskListNumber = ({data}) => {
  return (
    <div className="flex mt-10 justify-between gap-5 w-full px-5">
    <div className='bg-red-300 w-[45%] py-6 px-9 rounded-2xl'>
      <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
      <h3 className='text-xl font-medium'>Active</h3>
    </div>
    <div className='bg-red-300 w-[45%] py-6 px-9 rounded-2xl'>
      <h2 className='text-3xl font-semibold'>{data.taskCount.pending}</h2>
      <h3 className='text-xl font-medium'>Pending</h3>
    </div>
    <div className='bg-red-300 w-[45%] py-6 px-9 rounded-2xl'>
      <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
      <h3 className='text-xl font-medium'>Completed</h3>
    </div>
    <div className='bg-red-300 w-[45%] py-6 px-9 rounded-2xl'>
      <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
      <h3 className='text-xl font-medium'>New Task</h3>
    </div>
    <div className='bg-red-300 w-[45%] py-6 px-9 rounded-2xl'>
      <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
      <h3 className='text-xl font-medium'>Failed</h3>
    </div>
    </div>
  )
}

export default TaskListNumber
