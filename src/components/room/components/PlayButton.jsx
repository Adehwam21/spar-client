import React from 'react';
import Button from '../../Button';

function PlayButton({ onClick }) {
    return (
        <Button
            label="Play"
            onClick={onClick}
            className="bg-gold text-white text-sm font-bold hover:bg-yellow-600 w-24 h-10"
        />
    );
}

export default PlayButton;
