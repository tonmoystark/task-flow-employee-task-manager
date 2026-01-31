import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='h-full w-75 shrink-0 bg-gradient-to-br from-[#111827] transition-all duration-300 ease-out
  hover:-translate-y-1
  hover:shadow-xl hover:shadow-slate-900/60
  hover:brightness-110 via-[#1f2933] to-[#020617] p-5 rounded-2xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-2 py-1 text-sm rounded'>
                    {data.category}
                </h3>
                <h4>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>
                {data.taskTitle} 
            </h2>
            <p className='sm mt-5'>{data.taskDescription}</p>
            <div className='flex justify-between gap-2 mt-4'>
                <button className='bg-green-500 px-2 text-sm py-1 rounded'>Mark as completed</button>
                <button className='bg-red-500 px-2 py-1 text-sm rounded'>Mark as failed</button>
            </div>
        </div>
  )
}

export default AcceptTask