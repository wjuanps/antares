import axios from "axios";

/**
 * url temporária
 */
const baseURL = "https://wjuan-ps.000webhostapp.com/";

// const baseURL = "http://juansoares.ueuo.com/app/public/api/";
// const baseURL = "http://localhost:8000/api/";

const api = axios.create({
  baseURL,
});

export default api;
