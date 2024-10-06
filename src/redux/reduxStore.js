import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./slices/gameSlice";
import { socketMiddleware } from "./middleware/socketMiddleware";

const store = configureStore({
  reducer: {
    game: gameReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(socketMiddleware)
});

export default store;
