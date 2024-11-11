import React, { useState } from 'react';
import CustomButton from './CustomButton';
import CreateRoomModal from '../forms/CreateRoomModal';
import JoinRoomModal from '../forms/JoinRoomModal';
import PlayAiModal from '../forms/PlayAiModal'

function Lobby() {
    const [isCreateRoomModalOpen, setIsCreateRoomModalOpen] = useState(false);
    const [isJoinRoomModalOpen, setIsJoinRoomModalOpen] = useState(false);
    const [isPlayAiModalOpen, setIsPlayAiModalOpen] = useState(false);

    const handleOpenCreateRoomModal = () => setIsCreateRoomModalOpen(true);
    const handleOpenJoinRoomModal = () => setIsJoinRoomModalOpen(true);
    const handleOpenPlayAiModal = () => setIsPlayAiModalOpen(true);

    const handleCloseCreateRoomModal = () => setIsCreateRoomModalOpen(false);
    const handleCloseJoinRoomModal = () => setIsJoinRoomModalOpen(false);
    const handleClosePlayAiModal = () => setIsPlayAiModalOpen(false);

    return (
        <div className="lobby-container bg-green-700 flex items-center justify-center h-full w-full px-4 sm:px-8 md:py-8">
            <div className="grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                <CustomButton
                    label="Create Room"
                    icon="mdi:plus-circle-outline"
                    onClick={handleOpenCreateRoomModal}
                />
                <CustomButton
                    label="Join Room"
                    icon="mdi:account-multiple-plus-outline"
                    onClick={handleOpenJoinRoomModal}
                />
                <CustomButton
                    label="Quick Pairing"
                    icon="mdi:lightning-bolt-outline"
                />
                <CustomButton
                    label="Play AI"
                    icon="mdi:robot-outline"
                    onClick={handleOpenPlayAiModal}
                />
            </div>

            {/* Modals */}
            <CreateRoomModal
                isOpen={isCreateRoomModalOpen}
                onClose={handleCloseCreateRoomModal}
            />
            <JoinRoomModal
                isOpen={isJoinRoomModalOpen}
                onClose={handleCloseJoinRoomModal}
            />
            <PlayAiModal
                isOpen={isPlayAiModalOpen}
                onClose={handleClosePlayAiModal}
            />
        </div>
    );
}

export default Lobby;
