import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";

const RoutesMain = () => (
  <Routes>
    <Route index element={<LandingPage />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default RoutesMain;
