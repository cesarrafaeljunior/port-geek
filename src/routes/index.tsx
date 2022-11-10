import React from "react";
import { Route, Routes } from "react-router-dom";
import OpenRoutes from "../components/OpenRoutes";
import ProtectedRoutes from "../components/ProtectedRoutes";
import { DashboardProvider } from "../contexts/DashboardContext";
import { UserProvider } from "../contexts/userContext";
import { Dashboard } from "../pages/Dashboard";
import LandingPage from "../pages/LandingPage/LandingPage";
import NotFoundPage from "../pages/NotFound";
import { LayoutPage } from "../pages/Layout";
import LoadingProvider from "../contexts/LoadingContext";

const RoutesMain = () => (
  <Routes>
    <Route element={<UserProvider />}>
      <Route element={<OpenRoutes />}>
        <Route index path="/" element={<LandingPage />} />
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route element={<DashboardProvider />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Route>
    </Route>

    <Route path="*" element={<NotFoundPage />} />
    <Route path="/portfolio/:portfId" element={<LayoutPage />} />
  </Routes>
);

export default RoutesMain;
