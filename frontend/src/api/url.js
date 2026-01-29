import axios from "axios";

const BACKEND_URL = axios.create({
  baseURL: "http://localhost:3000/api/v1/noteapp",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json"
  }
});

export default BACKEND_URL;
