import axios from "axios";

// http://127.0.0.1:5000 https://cairorunners-b4c844cfd7c6.herokuapp.com xx

export const mainUrl = "http://127.0.0.1:5000";

const axiosInstance = axios.create({
  baseURL: mainUrl,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default axiosInstance;
