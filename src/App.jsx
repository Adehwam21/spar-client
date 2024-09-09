import './App.css';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { GameStateProvider } from './context/GameStateContext'; // Import GameStateProvider

function App() {
  return (
    <>
      <Toaster />
      <GameStateProvider>
        <Outlet /> {/* This is where the child routes like /lobby will be rendered */}
      </GameStateProvider>
    </>
  );
}

export default App;
