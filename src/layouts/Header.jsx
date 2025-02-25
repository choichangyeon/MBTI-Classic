import { useNavigate } from "react-router-dom";
import { isTokenInvalid } from "@utils/isTokenInvalid";
import AuthButton from "@components/header/AuthButton";
import MypageButton from "@components/header/MypageButton";
import useUserStore from "@/app/userStore";

const Header = () => {
  const { accessToken } = useUserStore();
  const isAuth = isTokenInvalid(accessToken);
  const navigate = useNavigate();

  return (
    <div className="w-full h-md row-base justify-between items-center px-10 bg-amber-100 shadow-md relative z-10">
      <div className="row-base">
        <button
          className="btn-base px-1 py-1 mr-5"
          onClick={() => navigate("/")}
        >
          홈
        </button>
        <button
          className="btn-base px-1 py-1"
          onClick={() => navigate("/result")}
        >
          결과 페이지
        </button>
      </div>
      {isAuth ? <AuthButton /> : <MypageButton />}
    </div>
  );
};

export default Header;
