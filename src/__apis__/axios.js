import axios from "axios";

// http://127.0.0.1:5000 https://basedontech-a0d694488b6c.herokuapp.com/

export const mainUrl = "https://basedontech-a0d694488b6c.herokuapp.com/";

const axiosInstance = axios.create({
  baseURL: mainUrl,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default axiosInstance;
