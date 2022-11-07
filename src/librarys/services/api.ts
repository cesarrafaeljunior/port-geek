import axios from "axios";

const token: string | null = localStorage.getItem("@PortGeek:token");

export const Api = axios.create({
  baseURL: "https://portgeek.herokuapp.com",
  timeout: 10000,
  headers: { Authorization: `Bearer ${token}` },
});
