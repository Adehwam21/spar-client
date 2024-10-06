import { io } from "socket.io-client";
import { joinRoom, playCard, setGameState } from "../slices/gameSlice";

let socket;

export const socketMiddleware = (store) => (next) => (action) => {
    if (!socket) {
        // Initialize the socket connection
        socket = io(import.meta.env.VITE_API_BASE_URL);

        // Listen for game state updates from the server
        socket.on('gameStateUpdate', (newGameState) => {
            store.dispatch(setGameState(newGameState));
        });

        // Handle player joining a room
        socket.on('join-room', (newPlayer) => {
            store.dispatch(joinRoom(newPlayer));
        });

        // Handle a card being played
        socket.on('play-card', (gameUpdate) => {
            store.dispatch(playCard(gameUpdate));
        });
    }

    // Pass all actions to the next middleware or to the reducers
    next(action);
};
