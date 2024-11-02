import React from 'react';
import PlayButton from './PlayButton';
import ShuffleButton from './ShuffleButton';
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { setGameState } from '../../../redux/slices/gameSlice';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

function VsAiPlayerCommandBar({ selectedCard }) {
    const dispatch = useDispatch()

    const handlePlayClick = async () => {
        // Handle play action
        console.log('a card was played', selectedCard.repStr)

        try {
            // Send room creation request to the server
            const roomNum = String(localStorage.getItem('roomNum'));
            const roomToken = localStorage.getItem('roomToken');
            const cardName = selectedCard.repStr

            const response = await axios.post(`${API_BASE_URL}game/play-ai/play-card`, {
                roomNum,
                cardName,
                roomToken
            });

            const roomData = response.data.success.roomInfo.roomData
            console.log(roomData)

            dispatch(setGameState(roomData));

        } catch (error) {
            console.log(error)
        }
    };

    const handleShuffleClick = () => {
        // Handle shuffle action
    };

    return (
        <div className="flex flex-col justify-center items-center gap-2 p-2 bg-green-800 rounded-r h-full">
            <PlayButton onClick={handlePlayClick} />
            <ShuffleButton onClick={handleShuffleClick} />
        </div>
    );
}

export default VsAiPlayerCommandBar;
