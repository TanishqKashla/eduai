import React from 'react'
import { TbTargetArrow } from "react-icons/tb";
import { LuPen } from "react-icons/lu";
import { FaFire } from "react-icons/fa6";
import { LuBrain } from "react-icons/lu";

const Profileprogress = () => {
    const profileItems = [
        {
            title: 'Quiz Accuracy',
            progress: 40,
            icon: <TbTargetArrow size={ 34} />
        },
        {
            title: 'Homework Completion',
            progress: 75,
            icon: <LuPen size={34} />
        },
        {
            title: 'Learning',
            progress: 60,
            icon: <LuBrain size={34} />
        },
        {
            title: 'Activity',
            progress: 50,
            icon: <FaFire size={34} />
        }
    ];

    return (
        <div className=''>
            <h2 className='font-bold mb-1'>Your Progress</h2>
            {profileItems.map((item, index) => (
                <div key={index} className='mb-4 flex gap-4 shadow-[0_0_5px_rgba(0,0,0,0.4)] rounded-lg p-2'>
                    <div className='bg-gray-400 flex items-center justify-center rounded-full aspect-square w-[60px]'>
                        {item.icon}
                    </div>
                    <div className=' w-[100%]'>
                        <h4>{item.title}</h4>
                        <div className='w-[100%] h-1 rounded-full bg-gray-300 overflow-hidden my-2'>
                            <div className={`w-[${item.progress}%] h-[100%] bg-green-600`}></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Profileprogress
