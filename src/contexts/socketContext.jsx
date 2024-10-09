import React, { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

// Context
const SocketContext = createContext(null);

export const useSocket = () => {
    return useContext(SocketContext);
};

// Provider component to wrap the application
export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const socketInstance = io(import.meta.env.VITE_SERVER_URL, {
            reconnectionAttempts: 5,
            timeout: 10000,
        });

        setSocket(socketInstance);

        // Cleanup the socket when component unmounts
        return () => {
            if (socketInstance) socketInstance.disconnect();
        };
    }, []);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};
