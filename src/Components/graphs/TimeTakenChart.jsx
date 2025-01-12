import React from 'react'
import scale from '../../assets/scale.png'
import { GiCuckooClock } from "react-icons/gi";

function TimeTakenChart() {
  return (
    <div className='p-5'>
      <div className='flex gap-4 ml-4'>
      <div>
        <GiCuckooClock className='mt-1 text-2xl text-[#9a9898]'/>
      </div>
      <div className=''>
      <h3 className='text-[#9a9898] font-bold text-xl'>Time Taken</h3>
      </div>
      </div>
    <div className='flex justify-center items-center flex-col p-5 text-[#9a9898] h-full gap-10 font-semibold'>
      <div>
       <img src={scale} className='w-[500px]'/>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quo iste, voluptatem ut earum eum.</p>
      </div>
      <div>
        <img src={scale} className='w-[500px]' />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, dolorem nesciunt. Vitae?</p>
      </div>
    </div>
    </div>
  )
}

export default TimeTakenChart