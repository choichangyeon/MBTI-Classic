import { jwtDecode } from "jwt-decode";

export const isTokenInvalid = (token) => {
  try {
    const { exp } = jwtDecode(token);
    const now = Date.now() / 1000; // 현재 시간을 초 단위로 계산
    return exp < now;
  } catch (error) {
    return true;
  }
};
