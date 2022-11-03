import { AxiosPromise } from "axios"
import { api } from "./api" 
export interface iAPIData {
    id: string,
    name: string,
    email: string,
}

export default function getProfile(): AxiosPromise<iAPIData> {
    const response = api.get('profile')

    return response
}