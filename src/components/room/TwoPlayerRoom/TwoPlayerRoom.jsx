import React from 'react';
import { useSelector } from 'react-redux';
import GameBoardTwo from './GameBoardTwo';
import PlayerCardRack from '../components/PlayerCardRack';
import RoomHeader from '../components/RoomHeader';
import RoomLinkModal from '../../forms/RoomLinkModal';

function TwoPlayerRoom() {
    // Access gameState from Redux store using useSelector
    const gameState = useSelector((state) => state.game.gameState); // Assumes you have a 'game' slice in your Redux store

    // Destructure game data from the Redux state if gameState is available
    const { players, turnSetter, previousRoundWinner, roomInfo } = gameState;
    const [currentPlayer, opponent] = players || [];  // Fallback to empty array if players is undefined
    const { vacant, roomNum } = roomInfo || {};  // Fallback to empty object if roomInfo is undefined

    if (!gameState || vacant === false) {
        return (
            <div>
                <RoomLinkModal roomId={id} link={`http://${import.meta.env.VITE_SERVER_URL}/game/room/2player/${roomNum}`} isOpen={true} />
            </div>
        );
    }
    return (
        <div className='h-screen overflow-hidden'>
            <div>
                <RoomHeader
                    eventMessage={`Current turn: ${turnSetter?.current}`}
                    previousRoundWinner={previousRoundWinner}
                    onLeaveRoom={() => console.log('Leaving room...')}
                />
            </div>
            <div>
                <GameBoardTwo players={[currentPlayer, opponent]} />
            </div>
            <div className='flex justify-center items-center bg-green-700'>
                <PlayerCardRack hand={currentPlayer?.hand} />
            </div>
        </div>
    );
}

export default TwoPlayerRoom;
