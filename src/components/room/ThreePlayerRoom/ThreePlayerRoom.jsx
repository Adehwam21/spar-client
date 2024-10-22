import React from 'react';
import { useSelector } from 'react-redux';
import GameBoardThree from './GameBoardThree';
import PlayerCardRack from '../components/PlayerCardRack';
import RoomLinkModal from '../../forms/RoomLinkModal';
import RoomHeader from '../components/RoomHeader';


function ThreePlayerRoom() {
    // Access gameState from context
    const gameState = useSelector((state) => state.game.gameState); // Assumes you have a 'game' slice in your Redux store

    const { players = [], turnSetter, previousRoundWinner } = gameState || {};
    const [player1, player2, player3,] = players;

    // Safety check for players length
    if (!gameState || players.length < 4) {
        return (
            <div>
                <RoomLinkModal roomId={"7893"} link={"http://eude.e3940"} isOpen={true} />
            </div>
        );
    }

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
