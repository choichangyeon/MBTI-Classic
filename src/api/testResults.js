import axios from "axios";

const API_URL = import.meta.env.VITE_JSON_LOCAL_API_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTestResults = async () => {
  const { data } = await axiosInstance.get();
  console.log(data);
  return data;
};

export const createTestResult = async (resultData) => {
  const { data } = await axiosInstance.post(``, resultData);
  return data;
};

export const deleteTestResult = async (id) => {
  const { data } = await axiosInstance.delete(`/${id}`);
  return data;
};

export const updateTestResultVisibility = async (id, visibility) => {
  const { data } = await axiosInstance.patch(`/${id}`, { visibility });
  console.log(data);
  return data;
};
