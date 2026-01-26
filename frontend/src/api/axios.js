import axios from "axios";

const API = axios.create({
  baseURL:
    "https://lab2market-backend-eds75tv8f-aman-suranas-projects.vercel.app/api",
});

// Attach JWT token to every request if exists
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
