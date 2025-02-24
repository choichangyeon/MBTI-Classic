import useUserStore from "@/app/userStore";
import { useNavigate } from "react-router-dom";

const MypageButton = () => {
  const navigate = useNavigate();
  const clearUserData = useUserStore((state) => state.clearUserData);
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
          clearUserData();
          navigate("/");
        }}
      >
        로그아웃
      </button>
    </div>
  );
};

export default MypageButton;
