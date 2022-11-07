import { Api } from "../librarys/services/api";
import React, { useState, useEffect, createContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface IDashboardContext {
  token: string | null;
  idUser: string | null;
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
  selectedLayout: string;
  id: number;
}

export const DashboardContext = createContext<IDashboardContext>(
  {} as IDashboardContext
);

export const DashboardProvider = () => {
  const navigate = useNavigate();
  const [portCreateAuth, setPortCreateAuth] = useState<boolean>(false);
  const token: string | null = localStorage.getItem("@PortGeek:token");
  const idUser: string | null = localStorage.getItem("@PortGeek:uuid");
  const [isShowModalFormEdit, setIsShowModalFormEdit] =
    useState<boolean>(false);
  const [isShowModalDelete, setIsShowModalDelete] = useState<boolean>(false);

  const [portfolioInfo, setPortfolioInfo] = useState<IPortfolioInfo | null>(
    {} as IPortfolioInfo
  );
  const [nameUser, setNameUser] = useState<string>("");

  useEffect(() => {
    token &&
      Api.get(`/portfolio?userId=${idUser}`)
        .then(({ data }) => {
          setPortfolioInfo(data[0]);
        })
        .catch((err) => {
          window.localStorage.clear();
          navigate("/");
        });
  }, [token, navigate, idUser]);

  useEffect(() => {
    token &&
      Api.get(`/users/${idUser}`)
        .then(({ data }) => {
          setNameUser(data.name);
        })
        .catch((err) => {
          window.localStorage.clear();
          navigate("/");
        });
  }, [token, idUser, navigate]);

  function deletePort() {
    Api.delete(`/portfolio/${portfolioInfo && portfolioInfo.id}`).then(
      (res) => {
        res && toast.success("Portfolio deletado com sucesso!");
        setIsShowModalDelete(false);
        setPortfolioInfo(null);
      }
    );
  }

  return (
    <DashboardContext.Provider
      value={{
        token,
        idUser,
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
