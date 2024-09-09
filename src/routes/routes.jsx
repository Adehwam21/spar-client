import {
    createBrowserRouter,
    Route,
    createRoutesFromElements
} from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard/Dashboard";
import LandingPage from "../pages/LandingPage/LandingPage"; // Import your LandingPage component

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<LandingPage />} /> {/* LandingPage at the root path */}
            <Route path="lobby" element={<Dashboard />} /> {/* Dashboard for /lobby */}
        </Route>
    )
);
