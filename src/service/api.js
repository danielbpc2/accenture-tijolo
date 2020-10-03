import axios from "axios";

const api = axios.create({
  baseURL: "http://47233f00a36c.ngrok.io/api",
});

export default api;
