import AuthButton from "@components/header/AuthButton";
import MypageButton from "@components/header/MypageButton";

const isAuth = false;

const Header = () => {
  return (
    <div className="w-full h-md bg-green-700">
      <div>홈</div>
      {isAuth ? <MypageButton /> : <AuthButton />}
    </div>
  );
};

export default Header;
