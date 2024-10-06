import React from 'react';
import { Icon } from '@iconify/react';
import PlayerAvatar from '../Header/Utilities/PlayerAvatar'; // Import PlayerAvatar component

function SideNav({ isOpen, onClose }) {
    const username = localStorage.getItem('username')
    return (
        <div
            className={`fixed inset-0 bg-gray-900 bg-opacity-80 z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}
            onClick={onClose}
        >
            <div
                className="bg-green-900 text-gold-300 w-8/12 h-full fixed top-0 right-0 transition-transform duration-300 transform"
                onClick={e => e.stopPropagation()} // Prevent click events from propagating to the overlay
            >

                {/* Upper Section */}
                <div className="flex flex-col h-full">
                    <div className="flex flex-col justify-between p-4 flex-grow-1">
                        {/* Player Avatar and Ping */}
                        <div className="flex flex-col mb-4">
                            <div className="flex flex-row justify-between space-x-16">
                                <div className="flex text-sn items-center text-white">
                                    <span>Ping: 100ms</span>
                                </div>
                                <div className="flex items-center text-sm text-white">
                                    <span>Server: 100ms </span>
                                </div>
                            </div>
                        </div>

                        <PlayerAvatar playerName={username} />
                    </div>

                    {/* Lower Section */}
                    <div className="flex flex-col p-4 space-y-60">
                        <nav>
                            <a href="/lobby" className="flex items-center space-x-2 border:rounded h-10 p-2 shadow text-white hover:text-yellow-300">
                                <Icon icon="mdi:home" width={20} height={20} />
                                <span>Lobby</span>
                            </a>
                            <a href="/leaderboard" className="flex items-center space-x-2 border:rounded h-10 p-2 shadow text-white hover:text-yellow-300">
                                <Icon icon="mdi:trophy" width={20} height={20} />
                                <span>Leaderboard</span>
                            </a>
                            <a href="/learn" className="flex items-center space-x-2 border:rounded h-10 p-2 shadow text-white hover:text-yellow-300">
                                <Icon icon="mdi:book-open" width={20} height={20} />
                                <span>Learn</span>
                            </a>
                            <a href="/how-to-play" className="flex items-center space-x-2 border:rounded h-10 p-2 shadow text-white hover:text-yellow-300">
                                <Icon icon="mdi:help-circle" width={20} height={20} />
                                <span>How to Play</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideNav;
