import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSocket } from '../../../contexts/socketContext';
import toast from 'react-hot-toast';

function RoomHeader({ eventMessage, previousRoundWinner, onLeaveRoom }) {
    const socket = useSocket();
    const navigate = useNavigate();

    function handleLeaveRoom() {
        const roomNum = localStorage.getItem('roomNum');
        const username = localStorage.getItem('username');

        try {
            if (socket && roomNum && username) {
                socket.emit('leave-room', { username, roomNum });
            }
        } catch (error) {
            console.error('Error emitting leave-room:', error);
        }

        // Remove room information from local storage and navigate to the lobby
        localStorage.removeItem('roomToken');
        localStorage.removeItem('roomNum');
        navigate('/lobby');
    }

    useEffect(() => {
        // Listen for 'left-room' event from the server
        if (socket) {
            socket.on('left-room', (data) => {
                toast.success(data.message || 'You have successfully left the room');
            });

            // Optionally handle error responses from the server
            socket.on('error', (error) => {
                if (error.code && error.message) {
                    toast.error(`Error ${error.code}: ${error.message}`);
                }
            });

            // Cleanup the event listeners when the component unmounts
            return () => {
                socket.off('left-room');
                socket.off('error');
            };
        }
    }, [socket]);

    return (
        <div className="flex flex-row md:flex-row justify-between items-center p-3 bg-green-800 text-white shadow-md space-y-3 md:space-y-0">
            {/* Event Displayer */}
            <div className="flex-1 text-center">
                <p className="text-base md:text-lg font-semibold">{eventMessage}</p>
                {previousRoundWinner && (
                    <p className="text-xs md:text-sm text-gray-400">
                        Previous Round Winner: {previousRoundWinner}
                    </p>
                )}
            </div>

            {/* Leave Room Button */}
            <div>
                <button
                    onClick={handleLeaveRoom}
                    className="bg-red-600 hover:bg-red-700 text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-lg"
                >
                    Leave Room
                </button>
            </div>
        </div>
    );
}

export default RoomHeader;
