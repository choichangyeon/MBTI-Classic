import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "@components/common/InputForm";
import { login } from "@api/auth";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const result = await login({
        id: id,
        password: password,
      });

      console.log(result);
      localStorage.setItem("accessToken", result.accessToken);

      alert("로그인에 성공했습니다.");
      navigate("/");
    } catch (e) {
      console.error(e);
      alert(e.message);
    }
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

export default Login;
