import React from 'react'
import { BiBell } from "react-icons/bi";
import Image from 'next/image';

const Userprofile = () => {
    return (
        <div className='flex items-center justify-between gap-1'>
            <h2 className='font-bold'>Welcome, Tanishq</h2>
            <div className='flex items-center gap-2'>

                <BiBell size={18} color='gray' />
                <div className='overflow-hidden w-[40px] h-[40px] rounded-full'>
                    <Image src='/pfp.jpeg' alt='course card' width={500} height={500} style={{ width: '100%', height: '100%', objectFit: "cover" }} />
                </div>
            </div>

        </div>
    )
}

export default Userprofile