import AuthButton from "@components/header/AuthButton";
import MypageButton from "@components/header/MypageButton";
import { useNavigate } from "react-router-dom";

const isAuth = false;

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-md row-base justify-between items-center px-10 shadow-md">
      <button onClick={() => navigate("/")}>홈</button>
      <p>WHAT'S MY MBTI?</p>
      {isAuth ? <MypageButton /> : <AuthButton />}
    </div>
  );
};

export default Header;
