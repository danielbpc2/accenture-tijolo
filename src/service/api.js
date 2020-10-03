import axios from "axios";

const api = axios.create({
  baseURL: "https://powerful-brushlands-92702.herokuapp.com/api",
});

export default api;
