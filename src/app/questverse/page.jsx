import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Leaderboard from '@/components/leaderboard/Leaderboard';

const quizzes = [
    {
        title: 'Mathematics',
        level: 'EASY',
        imageUrl: '/mathematics.png',
        link: '/mathematics-quiz' // Replace with the actual link
    },
    {
        title: 'Physics',
        level: 'MEDIUM',
        imageUrl: '/physics.png', // Replace with the actual image path
        link: '/questverse/physics-quiz' // Replace with the actual link
    },
    {
        title: 'Chemistry',
        level: 'HARD',
        imageUrl: '/chemistry.png', // Replace with the actual image path
        link: '/questverse/chemistry-quiz' // Replace with the actual link
    },
    {
        title: 'History',
        level: 'HARD',
        imageUrl: '/history.png', // Replace with the actual image path
        link: '/chemistry-quiz' // Replace with the actual link
    },
    {
        title: 'Economics',
        level: 'MEDIUM',
        imageUrl: '/economics.png', // Replace with the actual image path
        link: '/chemistry-quiz' // Replace with the actual link
    },
    {
        title: 'Geography',
        level: 'EASY',
        imageUrl: '/geography.png', // Replace with the actual image path
        link: '/chemistry-quiz' // Replace with the actual link
    },
];


const page = () => {

    return (
        <div className='ml-[200px] p-10 overflow-hidden'>
            <h1 className='font-bold text-3xl '>Questverse, where learning made fun</h1>
            <p>Select any one subject</p>
            <div className='flex flex-wrap mt-5'>
                {quizzes.map((quiz, index) => (
                    <Link key={index} href={quiz.link}>
                        <div className='cursor-pointer w-fit shadow-[0_0_10px_rgba(0,0,0,0.3)] rounded-2xl p-4'>
                            <div className='overflow-hidden w-[280px] h-[150px] rounded-xl'>
                                <Image src={quiz.imageUrl} alt={`${quiz.title} quiz`} width={500} height={500} style={{ width: '100%', height: '100%', objectFit: "cover" }} />
                            </div>
                            <div>
                                <div className='flex justify-between mt-3'>
                                    <h2 className='font-bold'>{quiz.title}</h2>
                                    <p className='text-green-600'>{quiz.level}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <Leaderboard />
        </div>
    )
}

export default page