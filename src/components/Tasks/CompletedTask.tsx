import React from 'react'

const CompletedTask = ({data}) => {
  return (
        <div className='flex-shrink-0 w-[350px] h-full bg-green-600 text-black rounded-2xl p-5'>
        <div className='flex justify-between'>
            <h3 className='bg-pink-300 text-black text-xl font-sm py-1 px-3 rounded-xl'>{data.categories}</h3>
            <p className=''>{data.date}</p>
        </div>
        <h2 className='text-2xl font-semibold mt-5'>{data.title}</h2>
        <p className='mt-2 text-sm'>{data.description}</p>
        <div className='mt-8'>
            <button className='w-full bg-green-700 py-1 px-3 rounded '>Completed</button>
        </div>
      </div>  
    
  )
}

export default CompletedTask
