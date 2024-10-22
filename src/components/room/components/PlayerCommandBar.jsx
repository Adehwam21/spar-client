import React from 'react';
import PlayButton from './PlayButton';
import ShuffleButton from './ShuffleButton';

function PlayerCommandBar() {
    const handlePlayClick = () => {
        // Handle play action
    };

    const handleShuffleClick = () => {
        // Handle shuffle action
    };

    return (
        <div className="flex justify-center  bg-green-800 items-center gap-10 p-3">
            <PlayButton onClick={handlePlayClick} />
            <ShuffleButton onClick={handleShuffleClick} />
        </div>
    );
}

export default PlayerCommandBar;
