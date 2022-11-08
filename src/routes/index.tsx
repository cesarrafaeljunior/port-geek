import { Navigate, Route, Routes } from "react-router-dom";
import OpenRoutes from "../components/OpenRoutes";
import ProtectedRoutes from "../components/ProtectedRoutes";
import { DashboardProvider } from "../contexts/DashboardContext";
import { Dashboard } from "../pages/Dashboard";
import LandingPage from "../pages/LandingPage/LandingPage";

const RoutesMain = () => (
  <Routes>
    <Route element={<OpenRoutes />}>
      <Route index path="/" element={<LandingPage />} />
    </Route>
    <Route element={<ProtectedRoutes />}>
      <Route element={<DashboardProvider />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Route>

    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default RoutesMain;
