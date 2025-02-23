import { useNavigate } from "react-router-dom";

const AuthButton = () => {
  const navigate = useNavigate();
  return (
    <div className="row-base center-base gap-5">
      <button
        type="button"
        className="btn-base px-2 py-1 "
        onClick={() => navigate("/login")}
      >
        로그인
      </button>
      <button
        type="button"
        className="btn-base px-2 py-1"
        onClick={() => navigate("/signup")}
      >
        회원가입
      </button>
    </div>
  );
};

export default AuthButton;
