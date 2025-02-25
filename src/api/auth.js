import axios from "axios";

const API_URL = import.meta.env.VITE_AUTH_API_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const register = async (userData) => {
  const { data } = await axiosInstance.post(`/register`, userData);
  return data;
};

export const login = async (userData) => {
  const { data } = await axiosInstance.post(`/login`, userData);
  if (data.accessToken) {
    axiosInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${data.accessToken}`;
  }
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
