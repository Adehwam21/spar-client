import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GameBoardTwo from './GameBoardTwo';
import PlayerCardRack from '../components/PlayerCardRack';
import RoomHeader from '../components/RoomHeader';
import RoomLinkModal from '../../forms/RoomLinkModal';
import { setGameState } from '../../../redux/slices/gameSlice';
import { useSocket } from '../../../contexts/socketContext';

function TwoPlayerRoom() {
    const dispatch = useDispatch();
    const roomData = useSelector((state) => state.game.roomState);
    const socket = useSocket(); // Access the socket from context

    useEffect(() => {
        socket.on('game-state-update', (newGameState) => {
            if (!newGameState) return;

            console.log('Game state update received in TwoPlayerRoom:', newGameState);
            dispatch(setGameState(newGameState.roomInfo.roomData));
        });

        return () => {
            socket.off('game-state-update');
        };
    }, [socket, dispatch]);


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
            <RoomHeader
                eventMessage={`Current turn: Player ${leadingCard?.playerIndex || 'N/A'}`}
                previousRoundWinner={moveWinner ? `Previous winner: Player ${moveWinner}` : 'No winner yet'}
                onLeaveRoom={() => console.log('Leaving room...')}
            />

            <GameBoardTwo players={players} />

            <div className='flex justify-center items-center bg-green-700'>
                <PlayerCardRack hand={currentPlayer?.hand} />
            </div>
        </div>
    );
}

export default TwoPlayerRoom;
