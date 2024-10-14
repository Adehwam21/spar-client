import { io } from "socket.io-client";
const SOCKET_URL = import.meta.env.VITE_SERVER_URL;

// Initialize socket without auth initially
export const socket = io(
    SOCKET_URL,
    {
        autoConnect: false,
        withCredentials: true
    }
);
