import React from 'react';
import { Icon } from '@iconify/react';

const RoomLinkModal = ({ roomId, link, isOpen, onClose }) => {
    if (!isOpen) return null;

    // Function to copy the room link to the clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(link);
        alert("Link copied to clipboard!");
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-green-700">
            <div className="bg-white rounded-lg shadow-lg p-6 w-80 max-w-md text-center">
                <h2 className="text-lg font-bold mb-4">Waiting for opponents...</h2>

                <p className="mb-2">
                    <span className="font-semibold">Room ID: </span>
                    <span className="text-gray-800">{roomId}</span>
                </p>

                <div className="relative mb-4">
                    <div className="text-blue-600 underline break-words">{link}</div>
                    <span
                        className="absolute right-2 top-0.5 cursor-pointer"
                        onClick={copyToClipboard}
                    >
                        <Icon icon='ph:copy' className="text-gray-500" width="24" height="24" />
                    </span>
                </div>

                <button
                    onClick={onClose}
                    className="text-white bg-green-700 hover:bg-green-500 py-2 px-4 rounded"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default RoomLinkModal;
