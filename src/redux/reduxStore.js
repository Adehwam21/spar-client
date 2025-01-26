import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import gameReducer from './slices/gameSlice';

const persistConfig = {
    key: 'game', 
    storage, 
};

const persistedReducer = persistReducer(persistConfig, gameReducer);

const store = configureStore({
    reducer: {
        game: persistedReducer, // Use the persisted reducer
    },
    devTools: import.meta.env.MODE !== 'production',
});


const persistor = persistStore(store);

export { store, persistor };
