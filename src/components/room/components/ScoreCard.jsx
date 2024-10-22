import React from 'react';

function ScoreCard({ score }) {
    return (
        <div className="bg-transparent text-5xl font-bold border-gray-300 rounded-lg shadow-md p-4 max-w-sm mx-auto">
            <div>
                {score}
            </div>
        </div>
    );
}

export default ScoreCard;
