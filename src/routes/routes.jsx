import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
import App from '../App';
import LandingPage from '../pages/LandingPage/LandingPage';
import Dashboard from '../pages/Dashboard/Dashboard';
import ProtectedRoute from '../components/ProtectedRoute';
import VsAiRoom from '../components/room/SinglePlayerRoom/VsAiRoom';
import TwoPlayerRoom from '../components/room/TwoPlayerRoom/TwoPlayerRoom';
import ThreePlayerRoom from '../components/room/ThreePlayerRoom/ThreePlayerRoom';
import FourPlayerRoom from '../components/room/FourPlayerRoom/FourPlayerRoom';
import Learn from '../pages/LearnPage/Learn';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<LandingPage />} />
            <Route
                path="/lobby"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />
            <Route path="/how-to-play" element={<Learn />} />
            {/* Room Routes */}
            <Route path="/room/play-ai/:roomId" element={<VsAiRoom />} />
            <Route path="/room/2player/:roomId" element={<TwoPlayerRoom />} />
            <Route path="/room/3player/:roomId" element={<ThreePlayerRoom />} />
            <Route path="/room/4player/:roomId" element={<FourPlayerRoom />} />
        </Route>
    )
);
