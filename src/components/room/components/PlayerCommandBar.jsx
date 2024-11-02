import React, { useEffect } from 'react';
import PlayButton from './PlayButton';
import ShuffleButton from './ShuffleButton';
import { useSocket } from '../../../contexts/socketContext'
import { useDispatch } from 'react-redux';
import { setGameState } from '../../../redux/slices/gameSlice';
import toast from 'react-hot-toast'

function PlayerCommandBar({ selectedCard }) {
    const dispatch = useDispatch()
    const socket = useSocket();

    const roomNum = localStorage.getItem('roomNum');
    const roomToken = localStorage.getItem('roomToken');
    const username = localStorage.getItem('username');
    let cardName;

    if (selectedCard) {
        cardName = selectedCard.repStr
    }

    const handlePlayClick = async () => {
        console.log('a card was played', cardName)

        if (socket) {
            socket.emit('play-card', { roomNum, cardName, username, roomToken })
        }
    };

    useEffect(() => {
        if (socket) {
            // Listen for game state updates from the server
            socket.on('play-card-update', (newGameState) => {
                if (!newGameState) {
                    return;
                }

                console.log(`New Room State`, newGameState);
                const updatedRoomData = newGameState.roomInfo.roomData

                dispatch(setGameState(updatedRoomData));
            });

            socket.on('error', (error) => {
                toast.error(error.message);
            })

            return () => {
                if (socket) {
                    socket.off('play-card-update');
                    socket.off('error')
                }
            }
        }
    }, [dispatch, roomToken, socket]);

    const handleShuffleClick = () => {
        // Handle shuffle action
    };

    return (
        <div className="flex flex-col justify-center items-center gap-2 p-2 bg-green-800 rounded-r h-full">
            <PlayButton onClick={handlePlayClick} />
            <ShuffleButton onClick={handleShuffleClick} />
        </div>
    );
}

export default PlayerCommandBar;
