const AuthButton = () => {
  return (
    <div className="flex flex-row justify-center align-center gap-5">
      <button
        type="button"
        className="rounded-md px-2 py-1 transition duration-300 hover:text-white hover:bg-indigo-300"
      >
        로그인
      </button>
      <button
        type="button"
        className="rounded-md px-2 py-1 transition duration-300 hover:text-white hover:bg-indigo-300"
        onClick={() => {}}
      >
        회원가입
      </button>
    </div>
  );
};

export default AuthButton;
