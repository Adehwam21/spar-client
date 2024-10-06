import React from 'react';

function Card({ card, isLeading }) {
    return (
        <div className={`relative h-24 md:h-28 border rounded-lg ${isLeading ? 'border-yellow-400' : 'border-none'} bg-white`}>
            <img
                src={card.image || '/path/to/default/card/image'} // Fallback image
                alt={`${card.rank} of ${card.suit}`}
                className="w-full h-full object-cover border border-gray-500 rounded-[0.1rem]"
            />
            {isLeading && (
                <div className="absolute inset-0 border-4 border-yellow-500 rounded-lg"></div>
            )}
        </div>
    );
}

export default Card;
