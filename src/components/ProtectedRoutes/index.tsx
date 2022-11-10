import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LoadingContext } from "../../contexts/LoadingContext";
import { UserContext } from "../../contexts/userContext";
import { Loading } from "../Loading";

const ProtectedRoutes = () => {
  const { user } = useContext(UserContext);
  const { loading } = useContext(LoadingContext);
  if (loading) {
    return <Loading />;
  }

  return user ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoutes;
