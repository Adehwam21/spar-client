import React, { useState } from 'react';
import CustomButton from './CustomButton';
import CreateRoomModal from '../forms/CreateRoomModal';
import JoinRoomModal from '../forms/JoinRoomModal';
import PlayAiModal from '../forms/PlayAiModal';

function Lobby() {
    const [modalState, setModalState] = useState({
        createRoom: false,
        joinRoom: false,
        playAi: false,
    });

    const handleOpenModal = (modal) => setModalState({ ...modalState, [modal]: true });
    const handleCloseModal = (modal) => setModalState({ ...modalState, [modal]: false });

    const buttons = [
        { label: 'Create Room', icon: 'mdi:plus-circle-outline', onClick: () => handleOpenModal('createRoom') },
        { label: 'Join Room', icon: 'mdi:account-multiple-plus-outline', onClick: () => handleOpenModal('joinRoom') },
        { label: 'Quick Pairing', icon: 'mdi:lightning-bolt-outline' },
        { label: 'Play AI', icon: 'mdi:robot-outline', onClick: () => handleOpenModal('playAi') },
    ];

    return (
        <div className="lobby-container bg-green-700 flex items-center justify-center h-full w-full px-4 sm:px-8 md:py-8">
            <div className="grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                {buttons.map((button, index) => (
                    <CustomButton
                        key={index}
                        label={button.label}
                        icon={button.icon}
                        onClick={button.onClick}
                    />
                ))}
            </div>

            {/* Modals */}
            <CreateRoomModal
                isOpen={modalState.createRoom}
                onClose={() => handleCloseModal('createRoom')}
            />
            <JoinRoomModal
                isOpen={modalState.joinRoom}
                onClose={() => handleCloseModal('joinRoom')}
            />
            <PlayAiModal
                isOpen={modalState.playAi}
                onClose={() => handleCloseModal('playAi')}
            />
        </div>
    );
}

export default Lobby;
