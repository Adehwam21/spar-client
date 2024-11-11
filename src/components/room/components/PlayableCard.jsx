import React from 'react';

function PlayableCard({ card, isSelected }) {

    return (
        <div className={`relative h-24 md:h-28 border-4 rounded-sm ${isSelected ? 'border-yellow-400' : 'border-none'} bg-transparent`}>
            <img
                src={`/images/cards/${card.repStr.toUpperCase()}.png`}
                alt={`${card.repStr}`}
                className="w-full h-full object-cover"
            />
        </div>
    );
}

export default PlayableCard;
