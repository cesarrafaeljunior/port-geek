import { IPortifolioInfos } from "../components/Layout"
import { Api } from "../librarys/services/api"

export const portfRequest = (portfId: number): Promise<IPortifolioInfos> => {
    return Api.get(`/portfolio/${portfId}`)
}