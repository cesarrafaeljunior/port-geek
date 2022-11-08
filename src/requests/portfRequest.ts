import { Api } from "../librarys/services/api";

export interface IPortifolioInfos {
  userId: number;
  adress: {
    city: string;
    country: string;
    zipCode: string;
    street: string;
  };
  user_profile: {
    name: string;
    age: string;
    gender: string;
    birthDate: string;
    email: string;
    telephone: string;
    github_url: string;
    linkedin_url: string;
    aboutYou: string;
    training: string;
    skills: string;
    experience: string;
  };
  project: {
    projectImage_url: string;
    project_title: string;
    project_description: string;
    projectDeploy_url: string;
    projectRepository_url: string;
  };
  selectedLayout: string;
  id: number;
}

interface iData {
  data: IPortifolioInfos
}

export const portfRequest = (portfId: number): Promise<iData> => {
  return Api.get(`/portfolio/${portfId}`);
};
