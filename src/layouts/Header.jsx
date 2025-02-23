import AuthButton from "@components/header/AuthButton";
import MypageButton from "@components/header/MypageButton";
import { useNavigate } from "react-router-dom";

const isAuth = false;

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-md row-base justify-between items-center px-10 bg-amber-100 shadow-md relative z-10">
      <button onClick={() => navigate("/")}>홈</button>
      <p className="font-bold">WHAT'S MY MBTI?</p>
      {isAuth ? <MypageButton /> : <AuthButton />}
    </div>
  );
};

export default Header;
