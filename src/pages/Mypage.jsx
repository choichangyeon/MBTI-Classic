import { useState } from "react";
import InputForm from "@components/common/InputForm";
import useUserStore from "@/app/userStore";
import { updateProfile } from "@/api/auth";

const Mypage = () => {
  const userData = useUserStore((state) => state.userData);
  const updateUserNickname = useUserStore((state) => state.updateUserNickname);
  const [userId] = useState(userData.userId);
  const [nickname, setNickname] = useState(userData.nickname);

  const handleChangeUserNickname = async () => {
    const formData = {
      avatar: null,
      nickname: nickname,
    };
    try {
      const result = await updateProfile(formData);
      updateUserNickname(result.nickname);
      alert("닉네임이 변경되었습니다");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="col-base center-base my-40">
      <div className="col-base center-base h-96 w-80 border ">
        <InputForm type="text" placeholder="아이디" value={userId} disabled />
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
