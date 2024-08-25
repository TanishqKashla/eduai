import React from 'react';
import Link from 'next/link';
import { RxDashboard } from 'react-icons/rx';
import { IoAnalyticsOutline } from 'react-icons/io5';
import { SiVitest } from 'react-icons/si';
import { BiBookAlt } from 'react-icons/bi';

const Navbar = () => {
    return (
        <div className='bg-[rgb(27,27,27)] text-white h-[100vh] w-[200px] p-3 flex flex-col justify-between absolute'>
            <div>
                <div className='text-lg font-bold'>EduAi</div>
                <div className='mt-[30px] flex flex-col gap-4 cursor-pointer'>
                    <Link href='/' className='flex items-center gap-3 bg-[rgb(49,49,49)] rounded-md p-1 px-2'>
                        <RxDashboard /> Dashboard
                    </Link>
                    <Link href='/learning' className='flex items-center gap-3 rounded-md p-1 px-2'>
                        <BiBookAlt /> Learning
                    </Link>
                    <Link href='/analytics' className='flex items-center gap-3 rounded-md p-1 px-2'>
                        <IoAnalyticsOutline /> Analytics
                    </Link>
                    <Link href='/questverse' className='flex items-center gap-3 rounded-md p-1 px-2'>
                        <SiVitest /> Questverse
                    </Link>
                </div>
            </div>

            <div>
                <Link href='/settings' className='text-center block mt-4 p-2 rounded-md hover:bg-[rgb(49,49,49)]'>
                    Settings
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
