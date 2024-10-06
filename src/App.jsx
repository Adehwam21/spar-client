import './App.css';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './redux/reduxStore';

function App() {
  return (
    <>
      <Toaster />
      <Provider store={store}>
        <Outlet />
      </Provider>
    </>
  );
}

export default App;
