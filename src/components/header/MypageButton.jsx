import useUserStore from "@/app/userStore";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MypageButton = () => {
  const navigate = useNavigate();
  const { clearUserData } = useUserStore();
  return (
    <div className="row-base center-base gap-5">
      <button
        type="button"
        className="btn-base px-2 py-1"
        onClick={() => navigate("/mypage")}
      >
        마이페이지
      </button>
      <button
        type="button"
        className="btn-base px-2 py-1"
        onClick={() => {
          handleLogout(clearUserData, navigate);
        }}
      >
        로그아웃
      </button>
    </div>
  );
};

const handleLogout = (callback, navigate) => {
  Swal.fire({
    icon: "warning",
    title: "로그아웃 확인",
    text: "로그아웃 하시겠습니까?",
    showCancelButton: true,
    confirmButtonText: "예",
    cancelButtonText: "아니오",
    confirmButtonColor: "#a5b4fc",
    cancelButtonColor: "#fc7531",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "로그아웃 완료",
        text: "로그아웃 됐습니다.",
        icon: "success",
        confirmButtonColor: "#a5b4fc",
      });
      callback();
      navigate("/");
    }
  });
};

export default MypageButton;
