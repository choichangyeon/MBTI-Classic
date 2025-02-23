import { useState } from "react";
import InputForm from "@components/common/InputForm";

const MOK_USER = {
  id: "최창연",
  nickname: "체리창연",
};

const Mypage = () => {
  const [id, setId] = useState(MOK_USER.id);
  const [nickname, setNickname] = useState(MOK_USER.nickname);

  const handleChangeUserNickname = () => {
    console.log({ id, nickname });

    //닉네임 변경 로직
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
          type="text"
          placeholder="닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <div className="col-base center-base my-2">
          <button
            className="btn-base my-2 w-md h-xs"
            onClick={handleChangeUserNickname}
          >
            정보수정
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
