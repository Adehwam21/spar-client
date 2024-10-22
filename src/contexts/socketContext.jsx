import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { socket } from '../socket';
import { useDispatch } from 'react-redux';
import { setGameState } from '../redux/slices/gameSlice';

// Context
const SocketContext = createContext(socket);

// Hook
export const useSocket = () => useContext(SocketContext);

// Context Provider
export const SocketProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const dispatch = useDispatch();

    // Memoize token and username to ensure stable values
    const token = useMemo(() => localStorage.getItem('token'), []);
    const username = useMemo(() => localStorage.getItem('username'), []);

    // Setup socket connection
    useEffect(() => {
        if (token) {
            socket.auth = { token };
            socket.connect();

            socket.on('connect', () => {
                console.log('Successfully connected to the socket with ID:', socket.id);
                socket.emit("identify", { username });
                setIsLoggedIn(true);
            });

            socket.on('connect_error', (err) => {
                console.error('Socket connection error:', err);
            });

            socket.on('reconnect_attempt', () => {
                console.log('Attempting to reconnect to the socket...');
            });

            socket.on('disconnect', (reason) => {
                console.warn('Disconnected from the socket:', reason);
            });
        }

        return () => {
            socket.off('connect');
            socket.off('connect_error');
            socket.off('reconnect_attempt');
            socket.off('disconnect');
        };
    }, [token, username]);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};
