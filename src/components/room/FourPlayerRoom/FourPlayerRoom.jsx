import React from 'react';
import GameBoardFour from './GameBoardFour'; // New component for four-player board
import PlayerCardRack from '../PlayerCardRack';
import PlayerCommandBar from '../PlayerCommandBar';
import RoomHeader from '../RoomHeader';
import { useGameState } from '../../../hooks/GameStateHooks'; // Adjust import path as needed

function FourPlayerRoom() {
    // Access gameState from context
    const { gameState } = useGameState();

    if (!gameState || !gameState.gameState) {
        return <div>Loading...</div>;
    }

    const { gameState: gameData } = gameState; // Extract nested gameState
    const { players, turnSetter, previousRoundWinner, roundStatus } = gameData;

    // Safety check for players length
    if (players.length < 4) {
        return <div>Not enough players available...</div>;
    }

    const [player1, player2, player3, player4] = players;

    return (
        <div className='h-full'>
            <div>
                <RoomHeader
                    eventMessage={`Current turn: ${turnSetter?.current}`}
                    previousRoundWinner={previousRoundWinner}
                    onLeaveRoom={() => console.log('Leaving room...')}
                />
            </div>
            <div>
                <GameBoardFour players={[player1, player2, player3, player4]} />
            </div>
            <div className='flex justify-center items-center bg-green-700'>
                <PlayerCardRack hand={player1.hand} />
            </div>
        </div>
    );
}

export default FourPlayerRoom;
