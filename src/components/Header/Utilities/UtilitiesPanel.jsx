import React from 'react';
import SearchBar from './Searchbar';
import Notification from './Notification';
import PlayerAvatar from './PlayerAvatar';

function UtilitiesPanel() {
    const playerName = "JohnDoe";
    const avatarUrl = "/path/to/avatar.jpg";

    return (
        <div className="flex items-center space-x-4">
            <SearchBar />
            <Notification />
            <PlayerAvatar playerName={playerName} avatarUrl={avatarUrl} />
        </div>
    );
}

export default UtilitiesPanel;
