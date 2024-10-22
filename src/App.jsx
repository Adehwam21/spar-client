import './App.css';
import { Toaster } from 'react-hot-toast';
import { SocketProvider } from './contexts/socketContext';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <>
      <Toaster />
      <SocketProvider>
        <Outlet />
      </SocketProvider>
    </>
  );
}

export default App;
