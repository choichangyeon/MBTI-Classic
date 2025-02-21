import AuthButton from "@components/header/AuthButton";
import MypageButton from "@components/header/MypageButton";
import { useNavigate } from "react-router-dom";

const isAuth = false;

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-md flex flex-row justify-between items-center px-10">
      <button onClick={() => navigate("/")}>홈</button>
      {isAuth ? <MypageButton /> : <AuthButton />}
    </div>
  );
};

export default Header;
