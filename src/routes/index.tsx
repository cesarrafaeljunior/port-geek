import { Navigate, Route, Routes } from "react-router-dom";
import { LayoutComponent } from "../components/Layout";
import { DashboardProvider } from "../contexts/DashboardContext";
import { Dashboard } from "../pages/Dashboard";
import LandingPage from "../pages/LandingPage/LandingPage";

const RoutesMain = () => (
  <Routes>
    <Route index element={<LandingPage />} />
    <Route element={<DashboardProvider />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="portfolio/:portfId" element={<LayoutComponent />}/>
    </Route>
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default RoutesMain;
