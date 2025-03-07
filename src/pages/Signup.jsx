import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "@components/common/InputForm";
import { register } from "@api/auth";
import Swal from "sweetalert2";

const Signup = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const result = await register({
        id: id,
        password: password,
        nickname: nickname,
      });

      Swal.fire({
        title: "회원가입 성공",
        text: "회원가입에 성공하셨습니다! 로그인 후 이용 부탁드립니다.",
        icon: "success",
        confirmButtonColor: "#a5b4fc",
      });
      navigate("/login");
    } catch (e) {
      Swal.fire({
        title: "회원가입 오류",
        text: e.response.data.message,
        icon: "error",
        confirmButtonColor: "#a5b4fc",
      });
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
        <InputForm
          type="text"
          placeholder="닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <div className="col-base center-base mt-2">
          <button className="btn-base my-2 w-md h-xs" onClick={handleSignup}>
            회원가입
          </button>
          <p className="text-gray-400">
            이미 계정이 있으신가요?{" "}
            <a className="text-indigo-300 hover:underline" href="/login">
              로그인
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
