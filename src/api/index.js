import axios from "axios";

const API = axios.create({
  baseURL: "https://assignment-api.alterset.space",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return req;
});

export const getAnimalsByPage = (page) => API.get(`/animals?page=${page}`);

export const register = (newUser) => API.post("/auth/register", newUser);
export const login = (existingUser) => API.post("/auth/login", existingUser);
