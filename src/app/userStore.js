import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialUserData = {
  userId: null,
  nickname: "",
};

const useUserStore = create(
  persist(
    (set) => ({
      userData: { ...initialUserData },
      accessToken: "",

      // 사용자 데이터를 설정 (userData와 accessToken을 모두 저장)
      setUserData: (result) => {
        const newUserData = {
          userId: result.userId,
          nickname: result.nickname,
        };
        set(() => ({
          userData: newUserData,
          accessToken: result.accessToken,
        }));
      },

      // 사용자 닉네임만 업데이트
      updateUserNickname: (nickname) =>
        set((state) => ({
          userData: { ...state.userData, nickname },
        })),

      // 사용자 데이터를 초기 상태로 리셋
      clearUserData: () =>
        set(() => ({
          userData: { ...initialUserData },
          accessToken: "",
        })),
    }),
    {
      name: "user-storage", // localStorage에 저장될 key 이름
      getStorage: () => localStorage, // 브라우저의 localStorage 사용
    }
  )
);

export default useUserStore;
