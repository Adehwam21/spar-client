import React from 'react';
import Button from '../../Button';

function PlayButton({ onClick }) {
    return (
        <Button
            label="Play"
            onClick={onClick}
            className="bg-gold text-white text-2xl font-bold hover:bg-yellow-600 w-48 h-12"
        />
    );
}

export default PlayButton;
