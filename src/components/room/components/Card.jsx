import React from 'react';

function Card({ card, isLeading }) {
    return (
        <div className={`relative h-24 md:h-28 border rounded-lg ${isLeading ? 'border-yellow-400' : 'border-none'} bg-transparent`}>
            <img
                src={`/images/cards/${card.repStr.toUpperCase()}.png`}
                alt={`${card.repStr}`}
                className="w-full h-full object-cover border border-green-700 rounded-[0.1rem]"
            />
            {isLeading && (
                <div className="absolute inset-0 border-4 border-yellow-500 rounded-lg"></div>
            )}
        </div>
    );
}

export default Card;
