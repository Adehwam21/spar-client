import React from 'react';
import PlayerCard from './PlayerCard';

function GameBoard({ players, playerGroup, playerTurn, leadingBidder }) {
    const mainPlayer = players[playerGroup.main];
    const opponents = playerGroup.opponents.map(index => players[index]);

    const renderPlayerCard = (player, positionClass, leadingBidder) => {
        // Assign color red only if it's the player's turn, otherwise default to the player's existing color or blue
        const color = player.playerInfo.username === playerTurn ? 'red' : player.color || 'green';
        const lead = leadingBidder || '';

        return (
            <div className={`absolute ${positionClass}`}>
                <PlayerCard player={player} color={color} leadingBidder={lead} />
            </div>
        );
    };

    return (
        <div className="relative bg-green-700 px-3 h-[27rem]">
            {/* For small screens (default), stack players vertically */}
            <div className="flex flex-col md:hidden justify-evenly items-center h-full">
                {opponents.map((opponent, index) => (
                    <PlayerCard
                        key={`opponent-${index}`}
                        player={opponent}
                        color={opponent.playerInfo.username === playerTurn ? 'red' : opponent.color || 'green'}
                        leadingBidder={leadingBidder}
                    />
                ))}
                <PlayerCard
                    player={mainPlayer}
                    color={mainPlayer.playerInfo.username === playerTurn ? 'red' : mainPlayer.color || 'green'}
                    leadingBidder={leadingBidder}
                />
            </div>

            {/* For medium screens and above, use absolute positioning */}
            <div className="hidden md:block w-full h-full">
                {/* For 2 players, main player at the bottom and opponent at the top */}
                {players.length === 2 && (
                    <>
                        {renderPlayerCard(opponents[0], "top-2 left-1/2 transform -translate-x-1/2", leadingBidder)}
                        {renderPlayerCard(mainPlayer, "bottom-2 left-1/2 transform -translate-x-1/2", leadingBidder)}
                    </>
                )}

                {/* For 3 players, place one player at the top, one at the bottom, and one on the left/right */}
                {players.length === 3 && (
                    <>
                        {renderPlayerCard(opponents[1], "right-5 top-1/2 transform -translate-y-1/2", leadingBidder)}
                        {renderPlayerCard(opponents[0], "left-5 top-1/2 transform -translate-y-1/2", leadingBidder)}
                        {renderPlayerCard(mainPlayer, "bottom-2 left-1/2 transform -translate-x-1/2", leadingBidder)}
                    </>
                )}

                {/* For 4 players, place one player at each corner */}
                {players.length === 4 && (
                    <>
                        {renderPlayerCard(opponents[2], "top-2 left-1/2 transform -translate-x-1/2", leadingBidder)}
                        {renderPlayerCard(opponents[1], "right-5 top-1/2 transform -translate-y-1/2", leadingBidder)}
                        {renderPlayerCard(opponents[0], "left-5 top-1/2 transform -translate-y-1/2", leadingBidder)}
                        {renderPlayerCard(mainPlayer, "bottom-2 left-1/2 transform -translate-x-1/2", leadingBidder)}
                    </>
                )}
            </div>
        </div>
    );
}

export default GameBoard;
