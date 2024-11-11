import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setGameState } from '../../redux/slices/gameSlice';
import { useNavigate } from 'react-router-dom';
import BaseModal from './BaseModal';
import axios from 'axios';
import toast from 'react-hot-toast';

function PlayAiModal({ isOpen, onClose }) {
    const [mode, setMode] = useState('vsAI');
    const [winningPoints, setWinningPoints] = useState('5');
    const [roomType, setRoomType] = useState('private');

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send room creation request to the server
            const response = await axios.post(`${API_BASE_URL}/game/play-ai/start`, {
                mode,
                winningPoints,
                roomType
            });

            const roomData = response.data.success.roomInfo.roomData
            const roomNum = response.data.success.roomInfo.roomData.roomNum;
            const roomToken = response.data.success.roomInfo.cookie;
            const message = response.data.success.message;

            localStorage.setItem("roomToken", roomToken);
            localStorage.setItem("roomNum", roomNum);
            toast.success(message);

            // Set game state
            dispatch(setGameState(roomData));

            // Navigate to room
            setTimeout(() => navigate(`/room/play-ai/${roomNum}`), 1000);

        } catch (error) {
            const message = error.response?.data?.error?.message || 'Room creation failed.';
            toast.error(message);
        }
    };

    return (
        <BaseModal title="Create Room" isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleFormSubmit}>
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
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-700 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300"
                >
                    Start Game
                </button>
            </form>
        </BaseModal>
    );
}

export default PlayAiModal;
