import React from 'react';
import { useSelector } from 'react-redux';
import VsAiGameBoard from './VsAiGameBoard';
import VsAiPlayerCardRack from '../components/VsAiCardRack';
import VsAiRoomHeader from '../components/VsAiRoomHeader';

function VsAiRoom() {
    const roomData = useSelector((state) => state.game.roomState);
    const { gameState } = roomData;
    const { players, moveWinner, currentPlayerIndex } = gameState;
    const currentPlayerTurn = players[currentPlayerIndex].playerInfo.username


    return (
        <div className='h-screen overflow-hidden'>
            <VsAiRoomHeader
                eventMessage={`Current turn: ${currentPlayerTurn}`}
                previousRoundWinner={moveWinner ? `Previous winner: Player ${moveWinner}` : 'No winner yet'}
            />

            <VsAiGameBoard players={players} />

            <div className='flex justify-center items-center bg-green-700'>
                <VsAiPlayerCardRack hand={players[0].hand} />
            </div>
        </div>
    );
}

export default VsAiRoom;
