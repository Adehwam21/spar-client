import React from 'react';
import Card from './Card';

function PlayerCardRack({ hand }) {
    return (
        <div className="flex justify-center w-full md:w-1/2 rounded-r rounded-l space-x-2 md:space-x-4 p-4 bg-green-800">
            {hand.map((card, index) => (
                <div
                    key={index}
                    className="transform transition-transform duration-300 hover:scale-110"
                >
                    <Card card={card} />
                </div>
            ))}
        </div>
    );
}

export default PlayerCardRack;
