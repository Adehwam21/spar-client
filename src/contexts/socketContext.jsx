import React, { createContext, useContext, useEffect, useState } from 'react';
import { socket } from '../socket';

// Context
const SocketContext = createContext(socket);

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            // Set token dynamically before connecting the socket
            socket.auth = { token: token };
            socket.connect();
            setIsLoggedIn(true); // Set logged in state
        } else {
            console.error('No token found. Unable to connect to socket.');
        }

        // Handle connection events
        socket.on('connect_error', (err) => {
            console.error('Socket connection error:', err);
        });

        socket.on('connect', () => {
            console.log('Successfully connected to the socket');
        });

        return () => {
            socket.off('connect_error');
            socket.off('connect');
            socket.disconnect();
        };
    }, [isLoggedIn]);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};
