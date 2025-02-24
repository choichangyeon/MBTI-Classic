import { create } from "zustand";

const useBearsStore = create((set) => ({
  userData: {},
  setUserData: (id, nickname) => set(() => ({ userData: { id, nickname } })),
  updateUserNickname: (nickname) =>
    set((state) => ({ userData: { ...state.userData, nickname } })),
  clearUserData: () => set(() => ({ userData: {} })),
}));

export default useBearsStore;
