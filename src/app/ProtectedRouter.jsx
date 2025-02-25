import { Navigate, Outlet, useLocation } from "react-router-dom";
import { isTokenInvalid } from "@utils/isTokenInvalid";
import useUserStore from "@/app/userStore";
import Swal from "sweetalert2";

function ProtectedRouter() {
  const { pathname } = useLocation();
  const clearUserData = useUserStore((state) => state.clearUserData);
  const token = localStorage.getItem("accessToken");

  if (isTokenInvalid(token)) {
    clearUserData();
    Swal.fire({
      icon: "warning",
      title: "접근 오류",
      text: "로그인이 필요한 기능입니다.",
      confirmButtonColor: "#a5b4fc",
    });
    return (
      <Navigate to="/login" replace state={{ redirectedFrom: pathname }} />
    );
  }

  return <Outlet />;
}

export default ProtectedRouter;
