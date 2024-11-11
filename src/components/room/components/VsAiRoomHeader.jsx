import React from 'react';

function VsAiRoomHeader({ eventMessage, previousRoundWinner }) {
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
        </div>
    );
}

export default VsAiRoomHeader;
