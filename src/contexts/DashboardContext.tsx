import { api } from "../services/api";
import React, { useState, useEffect, createContext, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iPortDataOrganized } from "../components/Modals/PortFormModal";
import { UserContext } from "./userContext";

interface IDashboardContext {
  portfolioInfo: IPortfolioInfo | null;
  isShowModalDelete: boolean;
  setIsShowModalDelete: React.Dispatch<React.SetStateAction<boolean>>;
  deletePort: () => void;
  setPortCreateAuth: React.Dispatch<React.SetStateAction<boolean>>;
  portCreateAuth: boolean;
  editPortAuth: boolean;
  setEditPortAuth: React.Dispatch<React.SetStateAction<boolean>>;
  sendPortifolio: (data: iPortDataOrganized) => Promise<void>;
  editPortfolio: (data: iPortDataOrganized) => Promise<void>;
}

export interface IPortfolioInfo {
  userId: number | string;
  adress: {
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
    selected_layout: string;
  };
  user_profile: {
    aboutYou: string;
    age: number;
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
  id: number;
}

export const DashboardContext = createContext<IDashboardContext>(
  {} as IDashboardContext
);

export const DashboardProvider = () => {
  const navigate = useNavigate();
  const [portCreateAuth, setPortCreateAuth] = useState<boolean>(false);
  const [editPortAuth, setEditPortAuth] = useState<boolean>(false);
  const [isShowModalDelete, setIsShowModalDelete] = useState<boolean>(false);
  const [portfolioInfo, setPortfolioInfo] = useState<IPortfolioInfo | null>(
    null
  );

  useEffect(() => {
    async function getPort() {
      try {
        const idUser: number | null = await Number(
          localStorage.getItem("@PortGeek:id")
        );
        const response = await api.get(`/portfolio?userId=${idUser}`);
        const { data } = response;
        setPortfolioInfo(data[0]);
      } catch (error) {
        window.localStorage.removeItem("@PortGeek:token");
        navigate("/");
      }
    }

    getPort();
  }, []);

  const sendPortifolio = async (data: iPortDataOrganized) => {
    const data2 = { ...data, userId: idUser };
    console.log(data2);
    try {
      const response = await api.post("/portfolio", data2);
      console.log(await response);
      toast.success("Portfolio created successfully");
      setPortfolioInfo(response.data);
      setPortCreateAuth(false);
    } catch (error) {
      error && toast.error("Something wrong!");
      console.log(error);
    }
  };

  const editPortfolio = async (data: iPortDataOrganized) => {
    try {
      const response = await api.patch(`/portfolio/${portfolioInfo?.id}`, data);
      console.log(await response);
      toast.success("Portfolio successfully edited", {
        autoClose: 2000,
      });
      setPortfolioInfo(response.data);
      setEditPortAuth(false);
    } catch (error) {
      console.log(error);
    }
  };

  const sendPortifolio = async (data: iPortDataOrganized) => {
    const idUser: number | null = await Number(
      localStorage.getItem("@PortGeek:id")
    );
    const data2 = { userId: idUser, ...data };
    try {
      console.log(data2);
      const response = await api.post("/portfolio", data2);
      console.log(await response);
      toast.success("Portfolio created successfully");
      setPortfolioInfo(response.data);
      setPortCreateAuth(false);
    } catch (error) {
      error && toast.error("Something wrong!");
    }
  };

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
        sendPortifolio,
        editPortfolio,
      }}
    >
      <Outlet />
    </DashboardContext.Provider>
  );
};
