import React from 'react';
import { useSelector } from 'react-redux';
import RoomLinkModal from '../../forms/RoomLinkModal';
import GameBoardFour from './GameBoardFour'; // New component for four-player board
import PlayerCardRack from '../components/PlayerCardRack';
import RoomHeader from '../components/RoomHeader';

function FourPlayerRoom() {
    // Access gameState from context
    const gameState = useSelector((state) => state.game.gameState); // Assumes you have a 'game' slice in your Redux store

    const { players = [], turnSetter, previousRoundWinner } = gameState || {};
    const [player1, player2, player3, player4] = players;

    // Safety check for players length
    if (!gameState || players.length < 4) {
        return (
            <div>
                <RoomLinkModal roomId={"7893"} link={"http://eude.e3940"} isOpen={true} />
            </div>
        );
    }

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
