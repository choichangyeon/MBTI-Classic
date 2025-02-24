import { Navigate, Outlet, useLocation } from "react-router-dom";
import { isTokenInvalid } from "@utils/isTokenInvalid";
import useUserStore from "@/app/userStore";

function ProtectedRouter() {
  const { pathname } = useLocation();
  const clearUserData = useUserStore((state) => state.clearUserData);
  const token = localStorage.getItem("accessToken");

  if (isTokenInvalid(token)) {
    clearUserData();
    return (
      <Navigate to="/login" replace state={{ redirectedFrom: pathname }} />
    );
  }

  return <Outlet />;
}

export default ProtectedRouter;
