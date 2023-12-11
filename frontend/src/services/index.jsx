import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com/users/JJoaoAugusto/repos",
  timeout: 8 * 1000,
});
