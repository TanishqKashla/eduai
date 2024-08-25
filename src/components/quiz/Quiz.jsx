'use client';
import React, { useState } from 'react';

// Quiz questions
const questions = [
    {
        question: "What is the force that pulls objects towards the Earth?",
        options: ["Magnetism", "Gravity", "Friction"],
        answer: "Gravity",
    },
    {
        question: "What is the speed of light in a vacuum?",
        options: ["300,000 km/s", "150,000 km/s", "30,000 km/s"],
        answer: "300,000 km/s",
    },
    {
        question: "What is the unit of electrical resistance?",
        options: ["Ohm", "Volt", "Ampere"],
        answer: "Ohm",
    },
    {
        question: "What is the formula for calculating speed?",
        options: ["Speed = Distance / Time", "Speed = Time / Distance", "Speed = Distance * Time"],
        answer: "Speed = Distance / Time",
    },
    {
        question: "What type of energy is stored in a battery?",
        options: ["Kinetic Energy", "Potential Energy", "Thermal Energy"],
        answer: "Potential Energy",
    },
];

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const handleAnswer = (selectedOption) => {
        if (selectedOption === questions[currentQuestionIndex].answer) {
            setScore(score + 1);
        }
        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < questions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
        } else {
            setQuizCompleted(true);
        }
    };

    if (quizCompleted) {
        return (
            <div className='flex flex-col items-center justify-center h-[90vh] bg-yellow-200'>
                <h2 className='font-bold text-5xl mb-4'>Quiz Completed!</h2>
                <p className='text-3xl'>Your score: <span className='font-bold'>{score}</span> out of {questions.length}</p>
            </div>
        );
    }

    const { question, options } = questions[currentQuestionIndex];

    return (
        <div className='ml-[200px]'>
            <h2 className='font-bold text-5xl mb-4'>Physics Quiz</h2>
            <div className=' h-[90vh] flex flex-col items-center justify-center'>
                <p className='text-xl font-bold mb-2'>Score: {score}</p>
                <p className='font-bold text-4xl mb-6'>{question}</p>
                <div className='flex gap-4'>
                    {options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswer(option)}
                            className='bg-blue-400 text-white rounded-md px-6 py-3 hover:bg-blue-500 transition'>
                            {option}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Quiz;
