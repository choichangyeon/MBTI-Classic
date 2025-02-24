import useUserStore from "@/app/userStore";
import { isTokenInvalid } from "@utils/isTokenInvalid";
import axios from "axios";
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
      if (isTokenInvalid(token)) {
        useUserStore.getState().clearUserData();
        return Promise.reject(new Error("Access token expired"));
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

export const updateProfile = async (formData) => {
  const { data } = await axiosInstance.patch(`/profile`, formData);
  return data;
};
