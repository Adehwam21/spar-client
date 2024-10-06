import React from 'react';
import { Icon } from '@iconify/react';

function CustomButton({ label, icon, onClick }) {
    return (
        <button
            onClick={onClick}
            className="flex flex-col items-center justify-center bg-green-900 text-white  rounded-lg p-6 shadow-lg transform transition-transform duration-300 hover:scale-105  hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold"
        >
            <Icon icon={icon} width="48" height="48" className="mb-2" />
            <span className="text-lg font-semibold">{label}</span>
        </button>
    );
}

export default CustomButton;
