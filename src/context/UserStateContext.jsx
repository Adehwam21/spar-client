import React, { createContext, useState } from 'react';

export const UserStateContext = createContext();

export const UserStateProvider = ({ children }) => {
    const [userState, setUserState] = useState({
        username: '',
        profilePicture: ''
    });

    // Example method to update user state
    const updateUserState = (newState) => {
        setUserState(prevState => ({ ...prevState, ...newState }));
    };

    return (
        <UserStateContext.Provider value={{ userState, updateUserState }}>
            {children}
        </UserStateContext.Provider>
    );
};
