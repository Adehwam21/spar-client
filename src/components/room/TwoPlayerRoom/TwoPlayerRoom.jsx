import React from 'react';
import { useSelector } from 'react-redux';
import GameBoardTwo from './GameBoardTwo';
import PlayerCardRack from '../components/PlayerCardRack';
import RoomHeader from '../components/RoomHeader';
import RoomLinkModal from '../../forms/RoomLinkModal';

function TwoPlayerRoom() {
    // Access gameState from Redux store using useSelector
    const gameState = useSelector((state) => state.game.gameState); // Assumes you have a 'game' slice in your Redux store

    // Destructure game data from the Redux state
    const { players = [], turnSetter, previousRoundWinner } = gameState || {};
    const [currentPlayer, opponent] = players;

    // Show RoomLinkModal if the game hasn't started or players haven't joined
    if (!gameState || players.length < 2) {
        return (
            <div>
                <RoomLinkModal roomId={"7893"} link={"http://eude.e3940"} isOpen={true} />
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
                <PlayerCardRack hand={currentPlayer.hand} />
            </div>
        </div>
    );
}

export default TwoPlayerRoom;
