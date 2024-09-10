import React from 'react';
import SearchBar from './Searchbar';
import Notification from './Notification';
import PlayerAvatar from './PlayerAvatar';

function UtilitiesPanel() {
    const playerName = localStorage.getItem('username')

    return (
        <div className="flex items-center space-x-4">
            <SearchBar />
            <Notification />
            <PlayerAvatar playerName={playerName} />
        </div>
    );
}

export default UtilitiesPanel;
