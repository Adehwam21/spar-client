import React from 'react';
import Card from './Card';

function CardPile({ cards }) {
    return (
        <div className="flex justify-center items-center relative h-24 md:h-36 w-56 md:w-72 bg-transparent">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="absolute transition-all"
                    style={{ left: `${index * 2.5}rem` }} // Smaller overlap on mobile
                >
                    <Card card={card} isLeading={false} />
                </div>
            ))}
        </div>
    );
}

export default CardPile;
