import React from 'react'
import Header from '../others/Header'
import TaskQuantity from '../others/TaskQuantity'
import TaskContain from '../TaskList/TaskContain'

const EmployeeDashboard = ({data, changeUser}) => {
  console.log(data);
  
  return (
    <div className='w-full h-full bg-linear-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white'>
        <Header data={data} changeUser={changeUser} />
        <TaskQuantity data={data} />
        <TaskContain data={data} />
    </div>
  )
}

export default EmployeeDashboard