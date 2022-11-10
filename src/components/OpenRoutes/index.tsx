import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LoadingContext } from "../../contexts/LoadingContext";
import { UserContext } from "../../contexts/userContext";
import { Loading } from "../Loading";

const OpenRoutes = () => {
  const { user } = useContext(UserContext);
  const { loading } = useContext(LoadingContext);
  if (loading) {
    return <Loading />;
  }

  return user != null ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

export default OpenRoutes;
