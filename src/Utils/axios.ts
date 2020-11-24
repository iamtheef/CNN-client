import axios from "axios";

export const client = axios.create({
  baseURL: "http://0.0.0.0:4000",
  timeout: 30000,
  headers: { "X-Custom-Header": "foobar" },
});
