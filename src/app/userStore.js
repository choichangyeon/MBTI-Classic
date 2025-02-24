import { create } from "zustand";

const initialUserData = {
  id: null,
  nickname: "",
};

const useUserStore = create((set) => ({
  userData: { ...initialUserData },

  // 사용자 데이터를 설정하고 localStorage에 저장
  setUserData: (result) => {
    const newUserData = { id: result.id, nickname: result.nickname };
    set(() => ({ userData: newUserData }));

    // 브라우저 환경 체크
    if (typeof window !== "undefined") {
      localStorage.setItem("userData", JSON.stringify(newUserData));
      localStorage.setItem("accessToken", result.accessToken);
    }
  },

  // 사용자 닉네임만 업데이트
  updateUserNickname: (nickname) =>
    set((state) => {
      const updatedUserData = { ...state.userData, nickname };

      if (typeof window !== "undefined") {
        localStorage.setItem("userData", JSON.stringify(updatedUserData));
      }
      return { userData: updatedUserData };
    }),

  // 사용자 데이터를 초기 상태로 리셋
  clearUserData: () => {
    set(() => ({ userData: { ...initialUserData } }));
    if (typeof window !== "undefined") {
      localStorage.removeItem("userData");
    }
  },
}));

export default useUserStore;
