import './App.css';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { UserStateProvider } from './context/UserStateContext';
import { GameStateProvider } from './context/GameStateContext'; // Import GameStateProvider

function App() {
  return (
    <>
      <Toaster />
      <UserStateProvider>
        <GameStateProvider>
          <Outlet /> {/* This is where the child routes like /lobby will be rendered */}
        </GameStateProvider>
      </UserStateProvider>
    </>
  );
}

export default App;
