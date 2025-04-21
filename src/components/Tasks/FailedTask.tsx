interface TaskType {
  title : string,
  date : string,
  description : string,
  categories : string,
  active : boolean,
  newTask : boolean,
  completed : boolean,
  failed : boolean
}

const FailedTask = ({data }:{data : TaskType}) => {
  return (
    <div className='flex-shrink-0 w-[350px] h-full bg-red-500 text-black rounded-2xl p-5'>
        <div className='flex justify-between'>
            <h3 className='bg-pink-300 text-black text-xl font-sm py-1 px-3 rounded-xl'>{data.categories}</h3>
            <p className=''>{data.date}</p>
        </div>
        <h2 className='text-2xl font-semibold mt-5'>{data.title}</h2>
        <p className='mt-2 text-sm'>{data.description}</p>
        <div className='mt-8'>
            <button className='w-full bg-red-700 py-1 px-3 rounded '>Failed</button>
        </div>
      </div>  
  )
}

export default FailedTask
