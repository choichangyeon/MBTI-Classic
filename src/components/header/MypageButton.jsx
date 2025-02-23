import { useNavigate } from "react-router-dom";

const MypageButton = () => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="btn-base px-2 py-1"
      onClick={() => navigate("/mypage")}
    >
      마이페이지
    </button>
  );
};

export default MypageButton;
