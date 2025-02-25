import { useState } from "react";
import InputForm from "@components/common/InputForm";
import useUserStore from "@/app/userStore";
import { updateProfile } from "@/api/auth";
import Swal from "sweetalert2";

const Mypage = () => {
  const { userData, updateUserNickname } = useUserStore();
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
      Swal.fire({
        title: "닉네임 변경 성공",
        text: `${result.nickname}으로 닉네임을 변경하셨습니다.`,
        icon: "success",
        confirmButtonColor: "#a5b4fc",
      });
    } catch (e) {
      Swal.fire({
        title: "닉네임 변경 오류",
        text: e.response.data.message,
        icon: "error",
        confirmButtonColor: "#a5b4fc",
      });
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
