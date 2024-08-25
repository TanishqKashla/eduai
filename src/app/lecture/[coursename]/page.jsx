'use client'
import React, { useEffect, useRef } from 'react';
import { AiTwotoneLike } from "react-icons/ai";

const Page = ({ src, title, width = '500', height = '400' }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 5000); // 5-second delay

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div className='ml-[200px] p-10'>

      <h2 className='text-4xl font-bold'>Number Systems</h2>
      <p>Learn about numbers and their history.</p>
      <div className=' flex gap-5 items-start mt-5'>
        <div style={{ padding: '10px', maxWidth: width }} className='overflow-hidden'>
          <iframe
            src='http://localhost:3001/'
            title={title}
            width={width}
            height={height}
            frameBorder="0"
            allowFullScreen
            style={{ border: 'none', borderRadius: '5px' }}
          />
        </div>
        <video
          ref={videoRef}
          src='/lecture.mp4'
          width='300'
          height='150'
          controls
          muted
          style={{ borderRadius: '5px', width: '600px', height: '400px' }}
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='border-2px border-t-2'>
        <div className='mt-5 flex items-center gap-5'>
          <AiTwotoneLike size={30} /> 50 Likes
        </div>
        <div className='border-2px rounded-md border-black mt-5'>
          <p className='text-gray-500'>Ask your doubts</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
