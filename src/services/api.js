import axios from "axios";

const baseURL = "https://juansoares.ueuo.com/app/public/api/";

const api = axios.create({
  baseURL,
});

export default api;
