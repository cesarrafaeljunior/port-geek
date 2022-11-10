import { AxiosPromise } from "axios";
import { api } from "./api";
import { iAPIData } from "./getProfile";

export interface iRegisterData {
  email: string;
  password: string;
  confirmPassword?: string;
  name: string;
}

export function postRegister(data: iRegisterData): AxiosPromise<iAPIData> {
  const response = api.post("register", data);
  return response;
}
