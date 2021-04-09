import axios from "axios";

const baseURL = "https://antares-api.juansoares.tech/api/";

const api = axios.create({
  baseURL,
});

export default api;
