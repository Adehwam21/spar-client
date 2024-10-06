import React from 'react';
import GameBoardThree from './GameBoardThree';
import PlayerCardRack from '../PlayerCardRack';
import PlayerCommandBar from '../PlayerCommandBar';
import RoomHeader from '../RoomHeader';


function ThreePlayerRoom() {
    // Access gameState from context
    const { gameState } = useGameState();

    if (!gameState || !gameState.gameState) {
        return <div>Loading...</div>;
    }

    const { gameState: gameData } = gameState; // Extract nested gameState
    const { players, turnSetter, previousRoundWinner, roundStatus } = gameData;

    // Safety check for players length
    if (players.length < 3) {
        return <div>Not enough players available...</div>;
    }

    const [player1, player2, player3] = players;

    return (
        <div className='h-screen'>
            <div>
                <RoomHeader
                    eventMessage={`Current turn: ${turnSetter?.current}`}
                    previousRoundWinner={previousRoundWinner}
                    onLeaveRoom={() => console.log('Leaving room...')}
                />
            </div>
            <div>
                <GameBoardThree players={[player1, player2, player3]} />
            </div>
            <div className='flex justify-center items-center bg-green-700'>
                <PlayerCardRack hand={player1.hand} />
            </div>
            {/* <div>
                <PlayerCommandBar roundStatus={roundStatus} />
            </div> */}
        </div>
    );
}

export default ThreePlayerRoom;
