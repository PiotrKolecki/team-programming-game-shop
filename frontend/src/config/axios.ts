import axios from "axios";
import { LS_TOKEN_ID } from "../store/user/actions";

const axiosInstance = axios.create({
  baseURL: "http://35.232.212.214/api",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(LS_TOKEN_ID);
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
