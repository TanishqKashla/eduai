import React from 'react';


const Leaderboard = () => {
    const data = [
        { name: 'Alice', score: 95 },
        { name: 'Bob', score: 90 },
        { name: 'Charlie', score: 88 },
        { name: 'David', score: 85 },
        { name: 'Eva', score: 84 },
        { name: 'Frank', score: 82 },
        { name: 'Grace', score: 80 },
        { name: 'Hank', score: 78 },
        { name: 'Ivy', score: 76 },
        { name: 'Jack', score: 75 },
    ];

    return (
        <div className="w-full max-w-lg p-4 shadow-lg rounded-lg bg-white">
            <h2 className="text-xl font-bold mb-4 text-center">Top 10 Contestants</h2>
            <ol className="list-decimal list-inside">
                {data.map((contestant, index) => (
                    <li
                        key={index}
                        className="flex justify-between items-center p-2 border-b last:border-b-0"
                    >
                        <span className="font-medium">{contestant.name}</span>
                        <span className="text-green-600 font-semibold">{contestant.score} pts</span>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Leaderboard;
