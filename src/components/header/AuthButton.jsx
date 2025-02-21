import { useNavigate } from "react-router-dom";

const AuthButton = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-center align-center gap-5">
      <button
        type="button"
        className="rounded-md px-2 py-1 transition duration-300 hover:text-white hover:bg-indigo-300"
        onClick={() => navigate("/login")}
      >
        로그인
      </button>
      <button
        type="button"
        className="rounded-md px-2 py-1 transition duration-300 hover:text-white hover:bg-indigo-300"
        onClick={() => navigate("/signup")}
      >
        회원가입
      </button>
    </div>
  );
};

export default AuthButton;
