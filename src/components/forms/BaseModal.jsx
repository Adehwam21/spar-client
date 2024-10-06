import React from 'react';
import { Icon } from '@iconify/react';

function BaseModal({ title, isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={onClose}
        >
            <div
                className="bg-white p-6 rounded-lg shadow-lg relative w-96"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    <Icon icon="mdi:close" width={24} height={24} />
                </button>
                <h2 className="text-2xl text-green-800 text-center justify-center font-bold mb-4">{title}</h2>
                {children}
            </div>
        </div>
    );
}

export default BaseModal;
