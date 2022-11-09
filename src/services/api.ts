import axios from "axios";
export const token = localStorage.getItem("@PortGeek:token") || "";

export const api = axios.create({
  baseURL: "https://portgeek.herokuapp.com/",
  timeout: 10000,
});
