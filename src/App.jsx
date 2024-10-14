import './App.css';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Toaster />
      <Outlet />
    </>
  );
}

export default App;
