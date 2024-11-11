import React from 'react';
import BaseModal from '../../forms/BaseModal';

function FinalScoreModal({ isOpen, onClose, scores, message }) {
    return (
        <BaseModal title="Final Scores" isOpen={isOpen} onClose={onClose} message={message}>
            <div className='text-lg text-green-800 text-center align-middle my-4'>{message}</div>
            <div className="flex flex-col items-center">
                {scores.map((player, index) => (
                    <div key={index} className="text-lg text-gray-700 my-2">
                        {player.name}: {player.score} points
                    </div>
                ))}
            </div>
        </BaseModal>
    );
}

export default FinalScoreModal;
