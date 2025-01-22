import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
import App from '../App';
import ProtectedRoute from '../components/ProtectedRoute';
import LandingPage from '../pages/LandingPage/LandingPage';
import Dashboard from '../pages/Dashboard/Dashboard';
import Room from '../components/room/Room';
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
            <Route
                path="/room/:mode/:roomId"
                element={
                    <ProtectedRoute>
                        <Room />
                    </ProtectedRoute>
                }
            />
            <Route path="/how" element={<Learn />} />
        </Route>
    )
);
