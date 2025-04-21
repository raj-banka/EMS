import{TaskType} from '../../Interfaces/UserType'
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

interface AcceptedTaskProps {
  data : TaskType,
  onAccept : (task : TaskType , status : string) => void
}

const AcceptedTask = ({data , onAccept} : AcceptedTaskProps) => {
  return (
    <div className='flex-shrink-0 w-[350px] h-full bg-green-300 text-black rounded-2xl p-5'>
        <div className='flex justify-between'>
            <h3 className='bg-pink-300 text-black text-xl font-sm py-1 px-3 rounded-xl'>{data.categories}</h3>
            <p className=''>{data.date}</p>
        </div>
        <h2 className='text-2xl font-semibold mt-5'>{data.title}</h2>
        <p className='mt-2 text-sm'>{data.description}</p>
    <div className='flex items-center justify-between mt-8'>
        <button 
        onClick={()=>onAccept(data , "completed")}
        className='bg-green-500 text-sm py-1 px-2 border-none rounded cursor-pointer hover:bg-green-400'>Mark as Completed</button>
        <button 
        onClick={() => onAccept(data , "failed")}
        className='bg-red-500 text-sm py-1 px-2 border-none rounded cursor-pointer hover:bg-red-400'>Mark as Failed</button>
    </div>
  </div>
  )
}

export default AcceptedTask
