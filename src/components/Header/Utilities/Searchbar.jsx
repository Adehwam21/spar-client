import React, { useState } from 'react';
import { Icon } from '@iconify/react';

function SearchBar() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleSearchBar = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="relative flex items-center">
            {isVisible && (
                <input
                    type="text"
                    placeholder="Search..."
                    className="absolute right-full ml-2 mr-2 p-2 rounded-md border border-gray-300 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
            )}
            <button onClick={toggleSearchBar} className="text-white hover:text-gold">
                <Icon icon="mdi:search" width="24" height="24" />
            </button>
        </div>
    );
}

export default SearchBar;
