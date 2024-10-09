import React from 'react';
import PlayerCard from '../components/PlayerCard';

function GameBoardThree({ players }) {
    return (
        <div className="relative bg-green-700 px-3 h-[27rem]">
            {/* On small screens (default), use vertical flexbox layout */}
            <div className="flex flex-col md:hidden justify-center items-center h-full">
                <PlayerCard player={players[0]} />
                <PlayerCard player={players[1]} />
                <PlayerCard player={players[2]} />
            </div>

            {/* On medium screens and above, use absolute positioning */}
            <div className="hidden md:block w-full h-full">
                {/* Left (West) */}
                <div className="absolute top-1/3 left-20 transform -translate-y-1/2">
                    <PlayerCard player={players[0]} />
                </div>

                {/* Right (East) */}
                <div className="absolute top-1/3 right-20 transform -translate-y-1/2">
                    <PlayerCard player={players[1]} />
                </div>

                {/* Bottom (South) */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                    <PlayerCard player={players[2]} />
                </div>
            </div>
        </div>
    );
}

export default GameBoardThree;
