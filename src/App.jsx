import './App.css';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { SocketProvider } from './contexts/socketContext';
import store from './redux/reduxStore';

function App() {
  return (
    <>
      <Toaster />
      <Provider store={store}>
        <SocketProvider>
          <Outlet />
        </SocketProvider>
      </Provider>
    </>
  );
}

export default App;
