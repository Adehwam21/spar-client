import React, { useState } from 'react';
import PlayableCards from './PlayableCard';
import VsAiPlayerCommandBar from './VsAiCommandBar';

function VsAiPlayerCardRack({ hand }) {
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (card) => {
        setSelectedCard(card);
        // Logic to handle selected card can go here
    };

    return (
        <div className="flex justify-center w-full h-full pb-4 bg-green-700">
            {/* Player cards section */}
            <div className="flex justify-center w-3/4 md:w-1/2 rounded-l space-x-2 md:space-x-2 p-1 bg-green-800">
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

            {/* Player command bar section */}
            <div className="w-1/4 md:w-1/6">
                <VsAiPlayerCommandBar selectedCard={selectedCard} />
            </div>
        </div>
    );
}

export default VsAiPlayerCardRack;
