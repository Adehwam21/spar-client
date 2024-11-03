import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGameState } from '../../../redux/slices/gameSlice';
import { useSocket } from '../../../contexts/socketContext';
import { groupPlayers } from '../../../services/roomService';
import GameBoardTwo from './GameBoardTwo';
import PlayerCardRack from '../components/PlayerCardRack';
import RoomHeader from '../components/RoomHeader';
import RoomLinkModal from '../../forms/RoomLinkModal';
import { current } from '@reduxjs/toolkit';


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
    const { players, moveWinner, leadingCard, moveNumber } = gameState;


    // Show RoomLinkModal when the room is vacant
    if (vacant) {
        let roomNum = localStorage.getItem('roomNum');
        return (
            <RoomLinkModal roomId={roomNum} link={`${import.meta.env.VITE_SERVER_URL}/game/room/2player/${roomNum}`} isOpen={true} />
        );
    }

    const playerList = roomData.players
    let playerGroup = null;
    const currentUser = localStorage.getItem('username')

    const playerTurn = () => {
        let turn = ""
        if (currentUser) {
            if ((leadingCard?.username || playerList[0]) === currentUser) {
                turn = leadingCard?.username || playerList[0]
            } else {
                turn = "Waiting for opponent."
            }
        }
        return turn

    }

    if (playerList && playerList.length > 0) {
        playerGroup = groupPlayers(playerList);
    }

    if (!playerGroup) {
        console.log('Could not group players');
    }

    // Once room is full, show the game board
    return (
        <div className='h-screen overflow-hidden'>
            <RoomHeader
                eventMessage={`Leader: ${playerTurn()} | Move: ${moveNumber}`}
                previousRoundWinner={moveWinner ? `Previous winner: Player ${moveWinner}` : 'No winner yet'}
                onLeaveRoom={() => console.log('Leaving room...')}
            />

            <GameBoardTwo players={players} playerGroup={playerGroup} />

            <div className='flex justify-center items-center bg-green-700'>
                <PlayerCardRack hand={players[playerGroup.main].hand} />
            </div>
        </div>
    );
}

export default TwoPlayerRoom;
