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

// The index of success for a believer:
// You are not successful if your don't have success
// You are not successful if your health and physical well being is faulty