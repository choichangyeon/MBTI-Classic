import { useState } from "react";
import InputForm from "@components/common/InputForm";

const Signup = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const handleSignup = () => {
    console.log({ id, password, nickname });
  };

  return (
    <div className="flex flex-col justify-center items-center my-40">
      <div className="flex flex-col justify-center items-center h-96 w-80 border ">
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
        <button className="btn-base my-2 w-md h-sm" onClick={handleSignup}>
          회원가입
        </button>
      </div>
    </div>
  );
};

export default Signup;
