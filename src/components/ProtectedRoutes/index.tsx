import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

const ProtectedRoutes = () => {
  const { user, loading } = useContext(UserContext);
  if (loading) {
    return null;
  }

  return user ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoutes;
