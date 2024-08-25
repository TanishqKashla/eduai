import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Currentcoursecard = () => {
    const courses = [
        {
            title: 'Number Systems',
            level: 'Beginner',
            imageUrl: '/number-system.png',
            progress: 60,
            route: '/lecture/number-systems' // Example route
        },
        {
            title: 'Light',
            level: 'Beginner',
            imageUrl: '/light.png',
            progress: 20,
            route: '/courses/light' // Example route
        },
        {
            title: '2D Motion',
            level: 'Intermediate',
            imageUrl: '/motion.png',
            progress: 80,
            route: '/courses/2d-motion' // Example route
        },
        {
            title: 'Organic Chemistry',
            level: 'Beginner',
            imageUrl: '/organic-chemistry.png',
            progress: 40,
            route: '/courses/organic-chemistry' // Example route
        }
    ];

    return (
        <div className="grid grid-cols-2 gap-4">
            {courses.map((course, index) => (
                <Link key={index} href={course.route}>
                    <div className='cursor-pointer w-fit shadow-[0_0_10px_rgba(0,0,0,0.3)] rounded-2xl p-4'>
                        <div className='overflow-hidden w-[280px] h-[150px] rounded-xl'>
                            <Image src={course.imageUrl} alt='course card' width={500} height={500} style={{ width: '100%', height: '100%', objectFit: "cover" }} />
                        </div>

                        <div>
                            <div className='flex justify-between mt-3'>
                                <h2>{course.title}</h2>
                                <p className='text-green-600'>{course.level}</p>
                            </div>
                            <div className='w-full h-2 rounded-full bg-gray-300 overflow-hidden my-2'>
                                <div className="h-full bg-green-600" style={{ width: `${course.progress}%` }}></div>
                            </div>
                            <p className='text-sm'>{course.progress}% complete</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Currentcoursecard;
