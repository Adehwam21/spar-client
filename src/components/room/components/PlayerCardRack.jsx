import React, { useState } from 'react';
import PlayableCards from './PlayableCard';
import PlayerCommandBar from './PlayerCommandBar';

function PlayerCardRack({ hand }) {
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (card) => {
        setSelectedCard(card);
        // Logic to handle selected card can go here
    };

    return (
        <div className="flex flex-col justify-center h-full items-center md:flex-row md:space-x-5 w-full m-3 pb-4 md:m-4 bg-green-700">
            {/* Player cards section */}
            <div className="flex justify-center items-center h-32 mt-0 md:w-1/3 w-full rounded-lg space-x-2 md:space-x-2 p-1 bg-green-800">
                {hand.map((card, index) => (
                    <div
                        key={index}
                        className="transform transition-transform duration-300 hover:scale-110 hover:cursor-pointer"
                        onClick={() => handleCardClick(card)}
                    >
                        <PlayableCards card={card} isSelected={selectedCard === card} />
                    </div>
                ))}
            </div>
            <PlayerCommandBar selectedCard={selectedCard} />
        </div>
    );
}

export default PlayerCardRack;
