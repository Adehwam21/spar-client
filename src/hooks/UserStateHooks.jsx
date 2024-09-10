import { useContext } from 'react';
import { UserStateContext } from '../context/UserStateContext'

export function UserState() {
    return useContext(UserStateContext);
}
