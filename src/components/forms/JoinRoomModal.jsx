import React, { useState, useEffect } from 'react';
import BaseModal from './BaseModal';
import { useDispatch } from 'react-redux'; // Import useDispatch to dispatch Redux actions
import { joinRoom } from '../../redux/slices/gameSlice'; // Import the joinRoom action
import { io } from 'socket.io-client';

const socket = io(import.meta.env.VITE_API_BASE_URL); // Initialize socket connection

function JoinRoomModal({ isOpen, onClose }) {
    const [roomNum, setRoomNum] = useState('');
    const [passcode, setPasscode] = useState('');
    const dispatch = useDispatch();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        socket.emit('join-room', { roomNum, passcode });
    };

    useEffect(() => {
        socket.on('gameStateUpdate', (newGameState) => {
            dispatch(joinRoom(newGameState));
        });

        return () => {
            socket.off('gameStateUpdate');
        };
    }, [dispatch]);

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
