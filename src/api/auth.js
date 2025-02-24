import axios from "axios";
import { jwtDecode } from "jwt-decode";
const API_URL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      try {
        // 토큰 디코딩 및 만료시간 체크
        const { exp } = jwtDecode(token);
        const now = Date.now() / 1000; // 현재 시간을 초 단위로 계산
        if (exp < now) {
          // 토큰이 만료되었으면 로컬스토리지에서 삭제
          localStorage.removeItem("accessToken");
          return Promise.reject(new Error("Access token expired"));
        }
      } catch (error) {
        // 디코딩 실패 시에도 토큰 삭제
        localStorage.removeItem("accessToken");
        return Promise.reject(error);
      }
      // 유효한 토큰일 경우 Authorization 헤더 설정
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const register = async (userData) => {
  const { data } = await axiosInstance.post(`/register`, userData);
  return data;
};

export const login = async (userData) => {
  const { data } = await axiosInstance.post(`/login`, userData);
  return data;
};

export const getUserProfile = async () => {
  const { data } = await axiosInstance.get(`/user`);
  return data;
};

export const updateProfile = async (formData) => {};
