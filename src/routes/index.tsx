import { Navigate, Route, Routes } from "react-router-dom";
import { DashboardProvider } from "../contexts/DashboardContext";
import { Dashboard } from "../pages/Dashboard";
import LandingPage from "../pages/LandingPage/LandingPage";

const RoutesMain = () => (
  <Routes>
    <Route element={<DashboardProvider />}>
      <Route index element={<LandingPage />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default RoutesMain;
