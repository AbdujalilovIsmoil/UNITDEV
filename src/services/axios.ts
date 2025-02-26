import axios from "axios";
// import storage from "./storage";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

api.defaults.timeout = 2500;
api.defaults.headers.post["Content-Type"] = "application/json";
// api.defaults.headers.common["Authorization"] = storage.get("token");
axios.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
