import React, { useState } from 'react';
import { Icon } from '@iconify/react';

function PlayerAvatar({ playerName, avatarUrl }) {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center space-x-2 text-white hover:text-gold">
                <span className=" sm:block font-semibold">{playerName}</span>
                <Icon icon="mdi:chevron-down" width="20" height="20" />
            </button>
            {isDropdownVisible && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded-md shadow-lg z-10">
                    <ul className="p-2">
                        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">Profile</li>
                        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">My Games</li>
                        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">Settings</li>
                        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">Logout</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default PlayerAvatar;
