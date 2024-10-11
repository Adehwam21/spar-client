import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./slices/gameSlice";


const store = configureStore({
  reducer: {
    game: gameReducer,
  },
  devTools: import.meta.env.MODE !== 'production',
});

export default store;
