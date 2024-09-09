import React from 'react';
import { Icon } from '@iconify/react';

function HamburgerButton({ onClick }) {
    return (
        <button onClick={onClick} className="text-white text-2xl lg:hidden">
            <Icon icon="mdi:menu" width={24} height={24} />
        </button>
    );
}

export default HamburgerButton;
