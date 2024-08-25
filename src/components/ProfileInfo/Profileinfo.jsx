import React from 'react'
import Userprofile from '../userprofile/Userprofile'
import Profileprogress from '../profileprogress/Profileprogress'

const Profileinfo = () => {
  return (
      <div className=' w-[400px] px-10 p-4 rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.2)]'>
          <Userprofile />
          <Profileprogress/>
    </div>
  )
}

export default Profileinfo