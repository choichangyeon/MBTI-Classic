import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "@components/common/InputForm";
import { login } from "@api/auth";
import useUserStore from "@/app/userStore";
import Swal from "sweetalert2";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const { setUserData } = useUserStore();
  const navigate = useNavigate();

  const handleSignup = async () => {
    userLogin(id, password, navigate, setUserData);
  };

  return (
    <div className="col-base center-base my-40">
      <div className="col-base center-base h-96 w-80 border ">
        <InputForm
          type="text"
          placeholder="아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <InputForm
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="col-base center-base my-2">
          <button className="btn-base my-2 w-md h-xs" onClick={handleSignup}>
            로그인
          </button>
          <p className="text-gray-400 mt-1">
            계정이 없으신가요?{" "}
            <a className="text-indigo-300 hover:underline" href="/signup">
              회원가입
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

const userLogin = async (id, password, navigate, setUserData) => {
  try {
    const result = await login({
      id: id,
      password: password,
    });

    setUserData(result);
    Swal.fire({
      title: "로그인 성공",
      text: "로그인에 성공하셨습니다!",
      icon: "success",
      confirmButtonColor: "#a5b4fc",
    });
    navigate("/");
  } catch (e) {
    Swal.fire({
      title: "로그인 오류",
      text: e.response.data.message,
      icon: "error",
      confirmButtonColor: "#a5b4fc",
    });
  }
};

export default Login;
