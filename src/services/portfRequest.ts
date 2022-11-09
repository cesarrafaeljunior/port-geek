import { api } from "./api";

interface IUserProfile {
  name: string;
  age: string;
  gender: string;
  birthDate: string | any;
  email: string;
  telephone: string;
  github_url: string;
  linkedin_url: string;
  aboutYou: string;
  training: string;
  skills: string;
  experience: string;
  userImage_url: string;
}

export interface IAdress {
  city: string;
  country: string;
  zipCode: string;
  street: string;
}

interface IProject {
  projectImage_url: string;
  project_title: string;
  project_description: string;
  projectDeploy_url: string;
  projectRepository_url: string;
  selected_layout: string;
}

export interface IPortifolioInfos {
  userId: number;
  adress: IAdress;
  user_profile: IUserProfile;
  project: IProject;
  id: number;
}

interface iData {
  data: IPortifolioInfos
}

export const portfRequest = (portfId: number): Promise<iData> => {
  return api.get(`/portfolio/${portfId}`);
};
