'use client'
import React, { useState, useEffect, useRef } from 'react';
import { IoPlayOutline } from "react-icons/io5";
import { LuPause } from "react-icons/lu";

const Timer = () => {
    const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isActive && !isPaused) {
            intervalRef.current = setInterval(() => {
                setTime(prevTime => {
                    if (prevTime <= 1) {
                        clearInterval(intervalRef.current);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalRef.current);
    }, [isActive, isPaused]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handlePause = () => {
        setIsPaused(true);
    };

    const handleReset = () => {
        setIsActive(false);
        setIsPaused(true);
        setTime(25 * 60); // Reset to 25 minutes
    };

    return (
        <div>
<h2 className='font-bold '>Pomodor Timer</h2>
            <div className="shadow-[0_0_5px_rgba(0,0,0,0.4)] bg-white rounded-lg flex flex-col items-center justify-center h-[170px]">

                <div className="text-3xl font-bold">
                    {formatTime(time)}
                </div>
                <div className="flex items-center gap-3 mt-5">
                    {!isActive ? (
                        <button onClick={handleStart} className='bg-blue-600 px-4 p-1 rounded-lg'><IoPlayOutline size={30} /></button>
                    ) : isPaused ? (
                        <button onClick={handleStart} className='bg-blue-600 px-4 p-1 rounded-lg'><IoPlayOutline size={30} /></button>
                    ) : (
                        <button onClick={handlePause} className='bg-blue-600 px-4 p-1 rounded-lg'><LuPause size={30} /></button>
                    )}
                    <button onClick={handleReset}>Reset</button>
                </div>
            </div>
        </div>
    );
};

export default Timer;
