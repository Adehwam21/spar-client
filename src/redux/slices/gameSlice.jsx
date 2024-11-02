// slices/gameSlice.js
import { createSlice } from '@reduxjs/toolkit';

// const initialState = dummyGameState; // Set initial state to dummy data
const initialState = {
    roomState: {
        id: "dummyRoom",
        roomNum: "0000",
        passcode: "dummyPass",
        token: "dummyToken",
        mode: "twoPlayer",
        winningPoints: 50,
        players: ["dummyPlayer1", "dummyPlayer2"],
        winner: null,
        vacant: true,
        roomType: "Private",
        createdBy: "dummyPlayer1",
        createdAt: null,
        endedAt: null,
        gameState: {
            players: [
                {
                    playerIndex: 0,
                    playerInfo: {
                        id: "dummy1",
                        username: "dummyPlayer1",
                        email: "dummy1@example.com",
                        profilePicture: "https://dummyimage.com/500x500",
                        friends: [],
                    },
                    hand: [],
                    bids: [],
                    points: 0,
                },
                {
                    playerIndex: 1,
                    playerInfo: {
                        id: "dummy2",
                        username: "dummyPlayer2",
                        email: "dummy2@example.com",
                        profilePicture: "https://dummyimage.com/500x500",
                        friends: [],
                    },
                    hand: [],
                    bids: [],
                    points: 0,
                },
            ],
            deck: [],
            moveNumber: 0,
            moveWinner: null,
            leadingCard: null,
            currentPlayerIndex: 0,
            gameStatus: "waiting",
            playedCards: [],
        },
    }
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setGameState: (state, action) => {
            state.roomState = action.payload;
        },
        joinRoom: (state, action) => {
            // Only update players, keep other roomState properties the same
            state.roomState.players = action.payload.players;
        },
        playCard: (state, action) => {
            const { playerIndex, cardPlayed } = action.payload;
            const player = state.roomState.gameState.players[playerIndex];
            player.hand = player.hand.filter(card => card !== cardPlayed); // Remove played card
        },
        updateTurn: (state, action) => {
            state.roomState.gameState.moveNumber = action.payload.moveNumber;
        },
    },
});

export const { setGameState, joinRoom, playCard, updateTurn } = gameSlice.actions;
export default gameSlice.reducer;
