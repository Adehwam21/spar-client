import React, { createContext, useState, useEffect } from 'react';
import dummyGameState from '../dummyRoomState.json';  // Adjust path as needed

export const GameStateContext = createContext();

export const GameStateProvider = ({ children }) => {
    const [gameState, setGameState] = useState(null);

    useEffect(() => {
        setGameState(dummyGameState);
    }, []);

    return (
        <GameStateContext.Provider value={{ gameState }}>
            {children}
        </GameStateContext.Provider>
    );
};
