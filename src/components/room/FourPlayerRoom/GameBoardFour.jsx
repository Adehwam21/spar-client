import React from 'react';
import PlayerCard from '../components/PlayerCard';

function GameBoardFour({ players }) {
    return (
        <div className="relative bg-green-700 px-10 h-[30rem]">
            {/* On small screens (default), use vertical flexbox layout */}
            <div className="flex flex-col md:hidden justify-center items-center h-full">
                <PlayerCard player={players[0]} />
                <PlayerCard player={players[1]} />
                <PlayerCard player={players[2]} />
                <PlayerCard player={players[3]} />
            </div>

            {/* On medium screens and above, use absolute positioning */}
            <div className="hidden md:block w-full h-full">
                {/* Top (North) */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                    <PlayerCard player={players[0]} />
                </div>

                {/* Left (West) */}
                <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
                    <PlayerCard player={players[1]} />
                </div>

                {/* Right (East) */}
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                    <PlayerCard player={players[2]} />
                </div>

                {/* Bottom (South) */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                    <PlayerCard player={players[3]} />
                </div>
            </div>
        </div>
    );
}

export default GameBoardFour;
