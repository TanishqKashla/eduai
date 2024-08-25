
import Currentcourse from '@/components/currentcourse/Currentcourse'
import Profileinfo from '@/components/ProfileInfo/Profileinfo'
import Timer from '@/components/timer/Timer'
import React from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai";

const Home = async () => {
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = "teach me about number systems in minimum lines. return the answer in simple text without any formatting";

  const result = await model.generateContent(prompt);
  console.log(result.response.text());
  return (
    <>

      <div className='ml-[200px] flex  justify-between px-20 p-5'>
        <div>

          <Currentcourse />
        </div>
        <div className='flex flex-col gap-10'>

          <Profileinfo />
          <Timer />
        </div>
      </div>
    </>
  )
}

export default Home