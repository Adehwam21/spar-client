import React, { useState } from 'react';
import { Icon } from '@iconify/react';

function Notification() {
    const [hasNotification, setHasNotification] = useState(true); // Example state
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <div className="relative">
            <button onClick={toggleDropdown} className="text-white relative hover:text-gold">
                <Icon
                    icon={hasNotification ? "mdi:bell-ring" : "mdi:bell-outline"}
                    width="24"
                    height="24"
                />
                {hasNotification && (
                    <span className="absolute top-0 right-0 block h-2.5 w-2.5 bg-red-600 rounded-full ring-2 ring-white"></span>
                )}
            </button>
            {isDropdownVisible && (
                <div className="absolute right-0 mt-2 w-64 bg-white text-black rounded-md shadow-lg z-10">
                    <div className="p-4">
                        {/* Example notifications */}
                        <div className="mb-2">Notification 1</div>
                        <div className="mb-2">Notification 2</div>
                        <div className="mb-2">Notification 3</div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Notification;
