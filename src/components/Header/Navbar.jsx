import React from 'react';

function Navbar() {
    return (
        <div className="flex space-x-8 ml-20 text-white">
            <a href="/lobby" className="hover:text-yellow-300">Lobby</a>
            <a href="/how-to-play" className="hover:text-yellow-300">Leaderboard</a>
            <a href="/how-to-play" className="hover:text-yellow-300">Learn</a>
            <a href="/how-to-play" className="hover:text-yellow-300">How to play</a>
        </div>
    );
}

export default Navbar;
