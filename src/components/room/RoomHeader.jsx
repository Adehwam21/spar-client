import React from 'react';

function RoomHeader({ eventMessage, previousRoundWinner, onLeaveRoom }) {
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
                    onClick={onLeaveRoom}
                    className="bg-red-600 hover:bg-red-700 text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-lg"
                >
                    Leave Room
                </button>
            </div>
        </div>
    );
}

export default RoomHeader;
