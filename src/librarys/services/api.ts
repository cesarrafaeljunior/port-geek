import axios from "axios";

export const Api = axios.create({
  baseURL: "https://portgeek.herokuapp.com",
  timeout: 5000,
});
