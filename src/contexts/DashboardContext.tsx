import { api } from "../services/api";
import React, { useState, useEffect, createContext, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "./userContext";

interface IDashboardContext {
  token: string | null;
  portfolioInfo: IPortfolioInfo | null;
  isShowModalFormEdit: boolean;
  setIsShowModalFormEdit: React.Dispatch<React.SetStateAction<boolean>>;
  isShowModalDelete: boolean;
  setIsShowModalDelete: React.Dispatch<React.SetStateAction<boolean>>;
  nameUser: string;
  deletePort: () => void;
  setPortCreateAuth: React.Dispatch<React.SetStateAction<boolean>>;
  portCreateAuth: boolean;
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
  // const { user } = useContext(UserContext);
  const [portCreateAuth, setPortCreateAuth] = useState<boolean>(false);
  const token: string | null = localStorage.getItem("@PortGeek:token");
  const idUser: string | null = localStorage.getItem("@PortGeek:id");
  const [isShowModalFormEdit, setIsShowModalFormEdit] =
    useState<boolean>(false);
  const [isShowModalDelete, setIsShowModalDelete] = useState<boolean>(false);

  const [portfolioInfo, setPortfolioInfo] = useState<IPortfolioInfo | null>(
    {} as IPortfolioInfo
  );
  const [nameUser, setNameUser] = useState<string>("");

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

  useEffect(() => {
    async function getUser() {
      try {
        const response = await api.get(`/users/${idUser}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const { data } = response;
        setNameUser(data.name);
      } catch (error) {
        window.localStorage.removeItem("@PortGeek:token");
        navigate("/");
      }
    }
    getUser();
  }, [token, idUser, navigate]);

  async function deletePort() {
    try {
      await api.delete(`/portfolio/${portfolioInfo && portfolioInfo.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
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
        token,
        portfolioInfo,
        isShowModalFormEdit,
        setIsShowModalFormEdit,
        isShowModalDelete,
        setIsShowModalDelete,
        nameUser,
        deletePort,
        portCreateAuth,
        setPortCreateAuth,
      }}
    >
      <Outlet />
    </DashboardContext.Provider>
  );
};
