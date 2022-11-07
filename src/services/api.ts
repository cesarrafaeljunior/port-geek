import axios from "axios";

const token: string | null = localStorage.getItem("@PortGeek:token");

export const api = axios.create({
  baseURL: "https://portgeek.herokuapp.com/",
  timeout: 3500,
  headers: { Authorization: `Bearer ${token}` },
});
