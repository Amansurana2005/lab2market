import axios from "axios";

const API = axios.create({
  baseURL: "https://lab2market-backend.vercel.app/api", // backend URL
});

// Attach JWT token to every request if exists
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = token;
  return req;
});

export default API;
