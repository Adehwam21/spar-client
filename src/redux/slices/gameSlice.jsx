// slices/gameSlice.js
import { createSlice } from '@reduxjs/toolkit';
import dummyGameState from '../../dummyRoomState.json'; // Import dummy data

// const initialState = dummyGameState; // Set initial state to dummy data
const initialState = {}

const gameSlice = createSlice({
    name: 'game',
    initialState, // Initialize with dummy data
    reducers: {
        setGameState(state, action) {
            state.gameState = action.payload;
        },
        joinRoom(state, action) {
            state.roomId = action.payload.roomId;
            state.players = action.payload.players;
        },
        playCard(state, action) {
            // Update the state based on the card played
            state.gameState = action.payload;
        },
        updateTurn(state, action) {
            state.turn = action.payload;
        },
    },
});

export const { setGameState, joinRoom, playCard, updateTurn } = gameSlice.actions;
export default gameSlice.reducer;
