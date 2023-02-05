import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "./hook";

export default function PrivateRoute() {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to="/initialLanding" state={{ from: location }} replace />;
  }
  return <Outlet />;
}
