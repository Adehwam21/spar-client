import React from 'react';

function Card({ card }) {
    return (
        <div className={`relative h-20 md:h-24 border-none rounded-sm bg-transparent`}>
            <img
                src={`/images/cards/${card.repStr.toUpperCase()}.png`}
                alt={`${card.repStr}`}
                className="w-full h-full object-cover"
            />
        </div>
    );
}

export default Card;
