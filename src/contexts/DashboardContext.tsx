import { api } from "../services/api";
import React, { useState, useEffect, createContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface IDashboardContext {
  portfolioInfo: IPortfolioInfo | null;
  isShowModalDelete: boolean;
  setIsShowModalDelete: React.Dispatch<React.SetStateAction<boolean>>;
  deletePort: () => void;
  setPortCreateAuth: React.Dispatch<React.SetStateAction<boolean>>;
  portCreateAuth: boolean;
  editPortAuth: boolean;
  setEditPortAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IPortfolioInfo {
  userId: number;
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
    birthDate: string;
    email: string;
    experience: string;
    gender: string;
    github_url: string;
    linkedin_url: string;
    name: string;
    skills: string;
    telephone: string;
    training: string;
  };
  selectedLayout: string;
  id?: number;
}

export const DashboardContext = createContext<IDashboardContext>(
  {} as IDashboardContext
);

export const DashboardProvider = () => {
  const navigate = useNavigate();
  const [portCreateAuth, setPortCreateAuth] = useState<boolean>(false);
  const [editPortAuth, setEditPortAuth] = useState<boolean>(false);
  const idUser: string | null = localStorage.getItem("@PortGeek:id");
  const [isShowModalDelete, setIsShowModalDelete] = useState<boolean>(false);

  const [portfolioInfo, setPortfolioInfo] = useState<IPortfolioInfo | null>(
    {} as IPortfolioInfo
  );
  // const [nameUser, setNameUser] = useState<string>("");

  useEffect(() => {
    async function getPort() {
      try {
        const response = await api.get(`/portfolio?userId=${idUser}`);
        const { data } = response;
        setPortfolioInfo(data[0]);
      } catch (error) {
        window.localStorage.removeItem("@PortGeek:token");
        navigate("/");
      }
    }

    getPort();
  }, [idUser, navigate]);

  // useEffect(() => {
  //   async function getUser() {
  //     try {
  //       const response = await api.get(`/users/${idUser}`);
  //       const { data } = response;
  //       setNameUser(data.name);
  //     } catch (error) {
  //       window.localStorage.removeItem("@PortGeek:token");
  //       navigate("/");
  //     }
  //   }
  //   getUser();
  // }, [token, idUser, navigate]);

  async function deletePort() {
    try {
      await api.delete(`/portfolio/${portfolioInfo && portfolioInfo.id}`);
      toast.success("Portfolio deletado com sucesso!");
      setIsShowModalDelete(false);
      setPortfolioInfo(null);
    } catch (error) {
      error && toast.error("Something wrong!");
    }
  }

  return (
    <DashboardContext.Provider
      value={{
        portfolioInfo,
        isShowModalDelete,
        setIsShowModalDelete,
        deletePort,
        portCreateAuth,
        setPortCreateAuth,
        editPortAuth,
        setEditPortAuth,
      }}
    >
      <Outlet />
    </DashboardContext.Provider>
  );
};
