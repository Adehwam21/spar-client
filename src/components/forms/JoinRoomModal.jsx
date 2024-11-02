import React, { useState, useEffect } from 'react';
import BaseModal from './BaseModal';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setGameState } from '../../redux/slices/gameSlice';
import { useSocket } from '../../contexts/socketContext';
import toast from 'react-hot-toast';

function JoinRoomModal({ isOpen, onClose }) {
    const [roomNum, setRoomNum] = useState('');
    const [passcode, setPasscode] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const socket = useSocket();

    const username = localStorage.getItem('username');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (socket) {
            socket.emit('join-room', { roomNum, passcode, username });
        }
    };

    useEffect(() => {
        if (socket) {
            // Listen for game state updates from the server
            socket.on('game-state-update', (newGameState) => {
                if (!newGameState) {
                    return;
                }

                console.log(`New Room State`, newGameState);
                const updatedRoomData = newGameState.roomInfo.roomData

                dispatch(setGameState(updatedRoomData));
                let mode = newGameState.roomInfo.roomData.mode;
                let roomToken = newGameState.roomInfo.cookie

                localStorage.setItem('roomNum', roomNum);
                localStorage.setItem('roomToken', roomToken);

                if (mode === '2') {
                    setTimeout(() => navigate(`/room/2player/${roomNum}`), 1000);
                } else if (mode === '3') {
                    setTimeout(() => navigate(`/room/3player/${roomNum}`), 1000);
                } else if (mode === '4') {
                    setTimeout(() => navigate(`/room/4player/${roomNum}`), 1000);
                }
            });

            return () => {
                if (socket) {
                    socket.off('game-state-update');
                }
            }
        }
    }, [dispatch, navigate, roomNum, socket]);

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
