import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import BaseModal from './BaseModal';
import axios from 'axios';
import toast from 'react-hot-toast';

function CreateRoomModal({ isOpen, onClose }) {
    const [passcode, setPasscode] = useState('');
    const [mode, setMode] = useState('2player');
    const [winningPoints, setWinningPoints] = useState('5');
    const [roomType, setRoomType] = useState('private');
    const navigate = useNavigate();
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send room creation request to the server
            const response = await axios.post(`${API_BASE_URL}/game/create-room`, {
                passcode,
                mode,
                winningPoints,
                roomType
            });

            let roomID = response.data.success.roomInfo.id
            let roomToken = response.data.success.roomInfo.cookie
            let message = response.data.success.message

            localStorage.setItem("roomToken", roomToken)
            toast.success(message)


            // Navigate to the room page based on the mode
            if (mode === '2player') {
                setTimeout((navigate(`/room/2player/${roomID}`), 1000));
            } else if (mode === '3player') {
                setTimeout((navigate(`/room/3player/${roomID}`), 1000));
            } else {
                setTimeout((navigate(`/room/4player/${roomID}`), 1000));
            }

        } catch (error) {
            message = respons.data.error.message
            console.error("Room creation failed:", error);
            toast.error("Room creating failed.")
        }
    };

    return (
        <BaseModal title="Create Room" isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleFormSubmit}>
                {/* Form Fields */}
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
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Mode</label>
                    <select
                        value={mode}
                        onChange={(e) => setMode(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="2player">2 Player</option>
                        <option value="3player">3 Player</option>
                        <option value="4player">4 Player</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Winning Points</label>
                    <select
                        value={winningPoints}
                        onChange={(e) => setWinningPoints(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="40">40</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Room Type</label>
                    <select
                        value={roomType}
                        onChange={(e) => setRoomType(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="private">Private</option>
                        <option value="public">Public</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-700 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300"
                >
                    Create Room
                </button>
            </form>
        </BaseModal>
    );
}

export default CreateRoomModal;
