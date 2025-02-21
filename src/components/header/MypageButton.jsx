import { useNavigate } from "react-router-dom";

const MypageButton = () => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="rounded-md px-2 py-1 transition duration-300 hover:text-white hover:bg-indigo-300"
      onClick={() => navigate("/mypage")}
    >
      마이페이지
    </button>
  );
};

export default MypageButton;
