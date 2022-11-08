import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

const ProtectedRoutes = () => {
  const { user } = useContext(UserContext);

  const location = useLocation();
  // if (loading) {
  //   return null;
  // }
  // state={{ from: location }}
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
