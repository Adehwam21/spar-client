import React from 'react';
import Card from './Card';

function CardPile({ cards, isLeaderPile }) {
    return (
        <div className="flex justify-center items-center rounded-md relative h-28 md:h-32 w-60 md:w-64 bg-green-800">
            {cards.map((card, index) => {
                const isLastCard = index === cards.length - 1;
                const scale = isLeaderPile && isLastCard ? 1.2 : 1; // Scale up the last card if isLeaderPile is true

                return (
                    <div
                        key={index}
                        className="absolute transition-transform flex justify-center items-center p-3"
                        style={{
                            left: `${index * 2.5}rem`,
                            transform: `scale(${scale})`, // Apply dynamic scaling
                            zIndex: isLastCard ? 10 : index, // Ensure the last card stays on top
                        }}
                    >
                        <Card card={card} />
                    </div>
                );
            })}
        </div>
    );
}

export default CardPile;
