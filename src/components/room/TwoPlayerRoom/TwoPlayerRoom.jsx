import React from 'react';
import GameBoardTwo from './GameBoardTwo';
import PlayerCardRack from '../PlayerCardRack';
import PlayerCommandBar from '../PlayerCommandBar';
import RoomHeader from '../RoomHeader';
import { useGameState } from '../../../hooks/GameStateHooks'; // Adjust import path as needed

function TwoPlayerRoom() {
    // Access gameState from context
    const { gameState } = useGameState();

    if (!gameState || !gameState.gameState) {
        return <div>Loading...</div>;
    }

    const { gameState: gameData } = gameState; // Extract nested gameState
    const { players, turnSetter, previousRoundWinner, roundStatus } = gameData;

    // Safety check for players length
    if (players.length < 2) {
        return <div>Not enough players available...</div>;
    }

    const [currentPlayer, opponent] = players;

    return (
        <div className='h-screen overlow-hidden'>
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
            {/* <div>
                <PlayerCommandBar roundStatus={roundStatus} />
            </div> */}
        </div>
    );
}

export default TwoPlayerRoom;
