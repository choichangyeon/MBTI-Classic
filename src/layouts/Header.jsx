import AuthButton from "@components/header/AuthButton";
import MypageButton from "@components/header/MypageButton";

const isAuth = false;

const Header = () => {
  return (
    <div className="w-full h-md flex flex-row justify-between items-center px-10">
      <button>홈</button>
      {isAuth ? <MypageButton /> : <AuthButton />}
    </div>
  );
};

export default Header;
