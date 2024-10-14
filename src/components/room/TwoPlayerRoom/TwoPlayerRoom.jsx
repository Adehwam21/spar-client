import React from 'react';
import { useSelector } from 'react-redux';
import GameBoardTwo from './GameBoardTwo';
import PlayerCardRack from '../components/PlayerCardRack';
import RoomHeader from '../components/RoomHeader';
import RoomLinkModal from '../../forms/RoomLinkModal';

function TwoPlayerRoom() {
    // Access gameState from Redux store
    const roomData = useSelector((state) => state.game.roomState);

    // Destructure game data from the Redux state
    const { id, vacant, roomNum, gameState } = roomData;
    const { players, moveWinner, leadingCard } = gameState;
    const [currentPlayer, opponent] = players;

    // Show RoomLinkModal when the room is vacant
    if (vacant) {
        let roomNum = localStorage.getItem('roomNum');
        return (
            <RoomLinkModal roomId={roomNum} link={`${import.meta.env.VITE_SERVER_URL}/game/room/2player/${roomNum}`} isOpen={true} />
        );
    }

    // Once room is full, show the game board
    return (
        <div className='h-screen overflow-hidden'>
            {/* Room header with status information */}
            <RoomHeader
                eventMessage={`Current turn: Player ${leadingCard?.playerIndex || 'N/A'}`}
                previousRoundWinner={moveWinner ? `Previous winner: Player ${moveWinner}` : 'No winner yet'}
                onLeaveRoom={() => console.log('Leaving room...')}
            />

            {/* Display the game board for two players */}
            <GameBoardTwo players={players} />

            {/* Player's card rack */}
            <div className='flex justify-center items-center bg-green-700'>
                <PlayerCardRack hand={currentPlayer?.hand} />
            </div>
        </div>
    );
}

export default TwoPlayerRoom;
