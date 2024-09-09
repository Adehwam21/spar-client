import React, { useState } from 'react';
import BaseModal from './BaseModal';

function JoinRoomModal({ isOpen, onClose, onSubmit }) {
    const [roomNum, setRoomNum] = useState('');
    const [passcode, setPasscode] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit({ roomNum, passcode });
    };

    return (
        <BaseModal title="Join Room" isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Room Number</label>
                    <input
                        type="text"
                        value={roomNum}
                        onChange={(e) => setRoomNum(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter Room Number"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Passcode</label>
                    <input
                        type="password"
                        value={passcode}
                        onChange={(e) => setPasscode(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter Passcode"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-700 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300"
                >
                    Join Room
                </button>
            </form>
        </BaseModal>
    );
}

export default JoinRoomModal;
