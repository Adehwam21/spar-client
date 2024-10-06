import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../../Button';

function PlayerAvatar({ playerName }) {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate(); // Use navigate for redirection

    const toggleDropdown = () => {
        setIsDropdownVisible(prev => !prev);
    };

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        // Clear the localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        // Redirect to login page
        navigate('/'); // Use navigate to redirect
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 text-white hover:text-gold"
                aria-expanded={isDropdownVisible}
                aria-haspopup="true"
            >
                <span className="font-semibold">{playerName}</span>

                <Icon icon="mdi:chevron-down" width="20" height="20" />
            </button>
            {isDropdownVisible && (
                <div className="absolute top-10 left-0 h-44 w-[100%] bg-green-900 text-white rounded-md shadow-lg z-10 lg:w-48 lg:top-12 lg:-left-24 lg:h-auto">
                    <ul className="p-2 md:p-4">
                        <li className="py-2 px-4 hover:bg-green-800">
                            <Link to="/profile" className="flex items-center space-x-2 text-white hover:text-yellow-400">
                                <Icon icon="mdi:account-outline" width="20" height="20" />
                                <span>Profile</span>
                            </Link>
                        </li>
                        {/* <li className="py-2 px-4 hover:bg-green-800">
                            <Link to="/my-games" className="flex items-center space-x-2 text-white hover:text-yellow-400">
                                <Icon icon="mdi:gamepad" width="20" height="20" />
                                <span>My Games</span>
                            </Link>
                        </li> */}
                        <li className="py-2 px-4 hover:bg-green-800">
                            <Link to="/settings" className="flex items-center space-x-2 text-white hover:text-yellow-400">
                                <Icon icon="mdi:cog-outline" width="20" height="20" />
                                <span>Settings</span>
                            </Link>
                        </li>
                        <li className="flex items-start hover:bg-green-800 cursor-pointer">
                            <Button
                                label="Logout"
                                icon="mdi:logout"
                                onClick={handleLogout}
                                className="flex items-start py-2 px-4 cursor-pointer text-red-500"
                            />
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default PlayerAvatar;
