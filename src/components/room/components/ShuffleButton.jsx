import React from 'react';
import { Icon } from '@iconify/react';


function ShuffleButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-transform duration-300 ${className}"
        >
            <Icon icon="eva:shuffle-fill" width="24" height="24" className='text-white' />
        </button>
    );
}

export default ShuffleButton;
