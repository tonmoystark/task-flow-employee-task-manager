import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskContain = ({data}) => {
  return (
    <div className='bg-transparent


  px-10 py-5 '>
    <div id='taskList' className='w-full h-[55%] mt-10 py-5 flex justify-start overflow-x-scroll items-center flex-nowrap gap-5 bg-transparent'>
        {data.tasks.map((elem, idx) =>{
            if(elem.active){
                return(<AcceptTask data={elem} key={idx}/>)
            }
            if(elem.completed){
                return(<CompleteTask data={elem} key={idx}/>)
            }
            if(elem.failed){
                return(<FailedTask data={elem} key={idx}/>)
            }
            if(elem.newTask){
                return(<NewTask data={elem} key={idx}/>)
            }
        })} 
    </div>
    <p className='text-center bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617]

mt-1 text-slate-700 font-mono'>Scroll to see all</p>
    </div>
    
  )
}

export default TaskContain