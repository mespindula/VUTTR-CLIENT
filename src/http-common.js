import axios from "axios";
import { getToken } from "./Auth";

const http = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-type": "application/json"
  }
});

http.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
});

export default http;
