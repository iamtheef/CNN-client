import axios from "axios";

export const client = axios.create({
  baseURL: process.env.REACT_APP_api,
  timeout: 30000,
  headers: { "X-Custom-Header": "foobar", "Content-Type": "application/json" },
});
