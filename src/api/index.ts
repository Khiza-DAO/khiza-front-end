import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:1337";
const API_TOKEN = import.meta.env.VITE_API_TOKEN || "";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

export { api }
