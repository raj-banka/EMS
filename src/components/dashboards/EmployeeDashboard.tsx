import React from 'react'
import Header from '../../others/Header'
import TaskListNumber from '../../others/TaskListNumber'
import TaskList from '../../TaskList/TaskList'

function EmployeeDashboard() {
  return (
    <div className='text-white bg-[#1C1C1C] h-screen w-screen'>
      < Header />
      <TaskListNumber />
      <TaskList />
    </div>
  )
}

export default EmployeeDashboard
