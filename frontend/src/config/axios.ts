import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://35.232.212.214/api",
});

export default axiosInstance;
