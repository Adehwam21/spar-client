import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGameState } from '../../redux/slices/gameSlice';
import { useSocket } from '../../contexts/socketContext';
import { groupPlayers } from '../../services/roomService';
import GameBoard from './components/GameBoard';
import PlayerCardRack from './components/PlayerCardRack';
import RoomHeader from './components/RoomHeader';
import RoomLinkModal from '../forms/RoomLinkModal';
import FinalScoreModal from './components/FinalScoreModal';
import toast from 'react-hot-toast';

function Room() {
    const [isFinalScoreModalOpen, setIsFinalScoreModalOpen] = useState(false);
    const dispatch = useDispatch();
    const roomData = useSelector((state) => state.game.roomState);
    const socket = useSocket(); // Access the socket from context

    const { id, vacant, roomNum, gameState, winner } = roomData || {};
    const { players, previousRoundWinner, currentPlayerIndex, moveNumber, leadingCard } = gameState || {};
    const currentUser = localStorage.getItem('username');

    // Hook for listening to socket events
    useEffect(() => {
        socket.on('game-state-update', (newGameState) => {
            if (newGameState) {
                console.log('Game state update received in Room:', newGameState);
                dispatch(setGameState(newGameState.roomInfo.roomData));
            }
        });

        return () => {
            socket.off('game-state-update');
        };
    }, [socket, dispatch]);

    // Open the modal when the game ends
    useEffect(() => {
        if (winner) {
            setIsFinalScoreModalOpen(true);
        }
    }, [winner]);

    // Display RoomLinkModal when the room is vacant
    if (vacant) {
        const storedRoomNum = localStorage.getItem('roomNum');
        return (
            <RoomLinkModal
                roomId={storedRoomNum}
                link={`${import.meta.env.VITE_SERVER_URL}/game/room/2player/${storedRoomNum}`}
                isOpen={true}
            />
        );
    }

    
    const playerList = roomData?.players || [];
    const playerTurnMessage = currentUser
        ? (playerList[currentPlayerIndex] === currentUser ? "Your turn" : "Waiting for opponent.")
        : "";

    const winnerMessage = winner
        ? (winner === currentUser ? "You win!" : `Game over! ${winner} wins.`)
        : "";

    const playerGroup = playerList.length > 0 ? groupPlayers(playerList) : { main: 0, opponents: [] };

    // Safely extract scores and sort them in descending order
    const scores = gameState
        ? gameState.players.map(player => ({
            name: player?.playerInfo?.username || "Unknown", // Handle missing playerInfo or username
            score: player?.points || 0, // Default points to 0 if missing
        })).sort((a, b) => b.score - a.score)
        : [];

    return (
        <div className="h-full mb-0">
            <RoomHeader
                eventMessage={winner ? winnerMessage : `${playerTurnMessage} | Move: ${moveNumber || 0}`}
                previousRoundWinner={previousRoundWinner || 'No winner yet'}
                onLeaveRoom={() => console.log('Leaving room...')}
            />

            <GameBoard
                players={players || []} // Ensure players is always an array
                playerGroup={playerGroup} // Provide a fallback for playerGroup
                playerTurn={playerList[currentPlayerIndex] || null} // Handle missing currentPlayerIndex
                leadingBidder={leadingCard?.username || ""} // Use optional chaining for leadingCard.username
            />

            <div className="flex h-auto justify-center items-center bg-green-700">
                {players && playerGroup && (
                    <PlayerCardRack hand={players[playerGroup.main]?.hand || []} />
                )}
            </div>

            {isFinalScoreModalOpen && (
                <FinalScoreModal
                    isOpen={isFinalScoreModalOpen}
                    onClose={() => setIsFinalScoreModalOpen(false)}
                    scores={scores}
                    message={winnerMessage}
                />
            )}
        </div>
    );
}

export default Room;
