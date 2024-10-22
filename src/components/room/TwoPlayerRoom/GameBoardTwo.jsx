import React from 'react';
import PlayerCard from '../components/PlayerCard';

function GameBoardTwo({ players }) {
    return (
        <div className="relative bg-green-700 px-3 h-[27rem]">
            {/* On small screens (default), use vertical flexbox layout */}
            <div className="flex flex-col md:hidden justify-evenly items-center h-full">
                <PlayerCard player={players[0]} />
                <PlayerCard player={players[1]} />
            </div>

            {/* On medium screens and above, use absolute positioning */}
            <div className="hidden md:block w-full h-full">
                {/* Up (North) */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                    <PlayerCard player={players[0]} />
                </div>

                {/* Bottom (South) */}
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
                    <PlayerCard player={players[1]} />
                </div>
            </div>
        </div>
    );
}

export default GameBoardTwo;
