import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { socket } from '../socket';
import { useDispatch } from 'react-redux';

// Context
const SocketContext = createContext(socket);

// Hook
export const useSocket = () => useContext(SocketContext);

// Context Provider
export const SocketProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Memoize token and username to ensure stable values
    const token = useMemo(() => localStorage.getItem('token'), []);
    const username = useMemo(() => localStorage.getItem('username'), []);

    // Setup socket connection
    useEffect(() => {
        if (token) {
            socket.auth = { token };
            socket.connect();
    
            socket.on("connect", () => {
                // Emit a custom "connect" event to the server
                socket.emit("connect-user", { username });
                setIsLoggedIn(true);
                console.log("Successfully connected to the socket:", socket.id);
            });
    
            socket.on("connect_error", (err) => {
                console.error("Socket connection error:", err);
            });
    
            socket.on("disconnect", (reason) => {
                console.warn("Disconnected from the socket:", reason);
            });
    
            return () => {
                socket.off("connect");
                socket.off("connect_error");
                socket.off("disconnect");
            };
        }
    }, [token, username]);
    

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};