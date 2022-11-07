import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { Api } from "../librarys/services/api";

interface PortifolioProviderProps {
  children: ReactNode;
}

export interface iPortDataOrganized {
  addres: {
    city: string;
    country: string;
    street: string;
    zipCode: string;
  };
  project: {
    projectDeploy_url: string;
    projectImage_url: string;
    projectRepository_url: string;
    project_description: string;
    project_title: string;
  };
  user_profile: {
    aboutYou: string;
    age: string;
    birthDate: string | any;
    email: string;
    experience: string;
    genre: string;
    github_url: string;
    linkedin_url: string;
    name: string;
    skills: string;
    telephone: string;
    training: string;
  };
}

interface iPortifolioContext {
  sendPortifolio: (data: iPortDataOrganized) => Promise<void>;
}

export const PortifolioContext = createContext<iPortifolioContext>(
  {} as iPortifolioContext
);

const PortfolioProvider = ({ children }: PortifolioProviderProps) => {
  const sendPortifolio = async (data: iPortDataOrganized) => {
    const data2 = { ...data, userId: 1 };
    try {
      const response = await Api.post("/portfolio", data2, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbnppbmhvQG1haWwuY29tIiwiaWF0IjoxNjY3NTY2OTI3LCJleHAiOjE2Njc1NzA1MjcsInN1YiI6IjEifQ.MfAGHS67Z8FyAC-OdXsWl-cYLF7be7Mp6PeSXw6I9rQ",
        },
      });
      console.log(await response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PortifolioContext.Provider value={{ sendPortifolio }}>
      {children}
    </PortifolioContext.Provider>
  );
};

export default PortfolioProvider;
