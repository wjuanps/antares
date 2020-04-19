import axios from "axios";

const baseURL = "http://juansoares.ueuo.com/app/public/api/";
// const baseURL = "http://localhost:8000/api/";

const api = axios.create({
  baseURL,
});

export default api;
