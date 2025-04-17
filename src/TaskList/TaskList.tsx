import AcceptedTask from "./AcceptedTask"
import CompletedTask from "./CompletedTask"
import FailedTask from "./FailedTask"
import NewTask from "./NewTask"

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='flex w-full overflow-x-auto flex-nowrap p-5 mt-5 h-[55%] gap-5 justify-start items-center'>
     {/* <AcceptedTask /> */}
      {
        data.tasks.map((t,idx)=>{
          if(t.active){
            return <AcceptedTask key={idx} data={t} />
          }
          if(t.newTask){
            return <NewTask key={idx} data={t}/>
          }
          if(t.completed){
            return <CompletedTask key={idx} data={t}/>
          }
          if(t.failed){
            return <FailedTask key={idx} data={t}/>
          }
        })
      }
      
    </div>
  )
}

export default TaskList
