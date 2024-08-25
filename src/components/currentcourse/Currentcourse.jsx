import React from 'react'
import Currentcoursecard from '../Currentcoursecard/Currentcoursecard'

const Currentcourse = () => {
  return (
    <div className='  p-10 rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.4)]'>
      <h2 className='font-bold text-lg mb-3'>
        Current Course Progress
      </h2>
      <Currentcoursecard/>

    </div>
  )
}

export default Currentcourse