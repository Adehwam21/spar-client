import React from 'react';
import PlayerCard from './PlayerCard';

function GameBoard({ players, playerGroup }) {
    const mainPlayer = players[playerGroup.main];
    const opponents = playerGroup.opponents.map(index => players[index]);

    const renderPlayerCard = (player, color, positionClass) => (
        <div className={`absolute ${positionClass}`}>
            <PlayerCard player={player} color={color} />
        </div>
    );

    return (
        <div className="relative bg-green-700 px-3 h-[27rem]">
            {/* For small screens (default), stack players vertically */}
            <div className="flex flex-col md:hidden justify-evenly items-center h-full">
                {opponents.map((opponent, index) => (
                    <PlayerCard
                        key={`opponent-${index}`}
                        player={opponent}
                        color={opponent.color || 'blue'}
                    />
                ))}
                <PlayerCard player={mainPlayer} color={mainPlayer.color || 'red'} />
            </div>

            {/* For medium screens and above, use absolute positioning */}
            <div className="hidden md:block w-full h-full">
                {/* For 2 players, main player at the bottom and opponent at the top */}
                {players.length === 2 && (
                    <>
                        {renderPlayerCard(opponents[0], "blue", "top-0 left-1/2 transform -translate-x-1/2")}
                        {renderPlayerCard(mainPlayer, "red", "bottom-5 left-1/2 transform -translate-x-1/2")}
                    </>
                )}

                {/* For 3 players, place one player at the top, one at the bottom, and one on the left/right */}
                {players.length === 3 && (
                    <>
                        {renderPlayerCard(opponents[0], "blue", "top-0 left-1/2 transform -translate-x-1/2")}
                        {renderPlayerCard(opponents[1], "green", "left-5 top-1/2 transform -translate-y-1/2")}
                        {renderPlayerCard(mainPlayer, "red", "bottom-5 left-1/2 transform -translate-x-1/2")}
                    </>
                )}

                {/* For 4 players, place one player at each corner */}
                {players.length === 4 && (
                    <>
                        {renderPlayerCard(opponents[0], "blue", "top-0 left-1/2 transform -translate-x-1/2")}
                        {renderPlayerCard(opponents[1], "green", "left-5 top-1/2 transform -translate-y-1/2")}
                        {renderPlayerCard(opponents[2], "yellow", "right-5 top-1/2 transform -translate-y-1/2")}
                        {renderPlayerCard(mainPlayer, "red", "bottom-5 left-1/2 transform -translate-x-1/2")}
                    </>
                )}
            </div>
        </div>
    );
}

export default GameBoard;
