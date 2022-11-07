import { IPortifolioInfos } from "../components/Layouts";
import { Api } from "../librarys/services/api";

export const portfRequest = (portfId: number): Promise<IPortifolioInfos> => {
  return Api.get(`/portfolio/${portfId}`);
};
