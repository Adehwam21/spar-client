import React from 'react';
import CardPile from './CardPile';
import ScoreCard from './ScoreCard';

function PlayerCard({ player, color, leadingBidder }) {
    const { playerInfo, points, bids } = player;
    const isLeader = playerInfo.username === leadingBidder;

    return (
        <div className="flex justify-center flex-row items-center p-1 text-white space-x-3">
            <div className="flex flex-col items-center border border-transparent shadow p-1">
                <img
                    src={playerInfo.profilePicture}
                    alt={`${playerInfo.username}'s avatar`}
                    className="w-10 h-10 rounded-full border-4"
                    style={{ borderColor: color }}
                />

                <div className="text-center">
                    <h2 className="text-lg font-semibold">{playerInfo.username}</h2>
                    <p className="text-sm font-bold text-white">{points}</p>
                </div>
            </div>

            <div className="flex-grow">
                {/* Card pile of the player */}
                <CardPile cards={bids} isLeaderPile={isLeader} />
            </div>

            {/* <div className="flex justify-center items-center flex-grow">
                <ScoreCard score={points} />
            </div> */}
        </div>
    );
}

export default PlayerCard;
