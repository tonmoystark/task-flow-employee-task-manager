import React from 'react'

const TaskQuantity = ({data}) => {
  return (
    <div className='flex flex-col sm:flex-row bg-transparent
 w-full gap-5 mt-10  px-10 py-5 '>
        <div className='w-[90%] sm:w[45%] px-10 py-6 rounded-xl bg-gradient-to-br from-[#0f172a] transition-all duration-300 ease-out
  hover:-translate-y-1
  hover:shadow-2xl hover:shadow-indigo-500/20
  hover:brightness-110 via-[#1e3a8a] to-[#0284c7]'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='w-[90%] sm:w[45%] px-10 py-6 rounded-xl bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#4338ca] transition-all duration-300 ease-out
  hover:-translate-y-1
  hover:shadow-2xl hover:shadow-indigo-500/20
  hover:brightness-110
'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
            <h3 className='text-xl font-medium'>Active Task</h3>
        </div>
        <div className='w-[90%] sm:w[45%] px-10 py-6 rounded-xl transition-all duration-300 ease-out
  hover:-translate-y-1
  hover:shadow-2xl hover:shadow-indigo-500/20
  hover:brightness-110 bg-gradient-to-br from-[#052e16] via-[#166534] to-[#22c55e]
'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className='w-[90%] sm:w[45%] px-10 py-6 rounded-xl transition-all duration-300 ease-out
  hover:-translate-y-1
  hover:shadow-2xl hover:shadow-indigo-500/20
  hover:brightness-110 bg-gradient-to-br from-[#450a0a] via-[#7f1d1d] to-[#ef4444]
'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskQuantity