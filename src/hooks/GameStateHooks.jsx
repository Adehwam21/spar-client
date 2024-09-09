import { useContext } from 'react';
import { GameStateContext } from '../context/GameStateContext'; // Adjust path if needed

export function useGameState() {
    return useContext(GameStateContext);
}
