import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:4000",
  timeout: 30000,
  headers: { "X-Custom-Header": "foobar", "Content-Type": "application/json" },
});
