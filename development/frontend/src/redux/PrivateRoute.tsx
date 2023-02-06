import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "./Hook";

export default function PrivateRoute() {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const location = useLocation();
  console.log(isAuth);

  if (!isAuth) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return <Outlet />;
}
