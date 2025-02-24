import axios from "axios";

const API_URL = import.meta.env.VITE_JSON_LOCAL_API_URL;

export const getTestResults = async () => {
  const { data } = await axios.get(API_URL);
  console.log(data);
  return data;
};

export const createTestResult = async (resultData) => {
  const { data } = await axios.post(API_URL, resultData);
  console.log(data);
  return data;
};

export const deleteTestResult = async (id) => {};

export const updateTestResultVisibility = async (id, visibility) => {};
