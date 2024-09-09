import React from 'react';
import { Icon } from '@iconify/react';

function Button({ label, icon, onClick, className }) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center justify-center px-4 py-2 rounded-lg transition-transform duration-300 ${className}`}
        >
            {icon && <Icon icon={icon} width="48" height="48" className="mr-2 text-5xl" />}
            {label}
        </button>
    );
}

export default Button;
