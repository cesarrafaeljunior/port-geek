import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

const OpenRoutes = () => {
  const { user } = useContext(UserContext);

  // if (loading) {
  //   return null;
  // }

  return user ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

export default OpenRoutes;
