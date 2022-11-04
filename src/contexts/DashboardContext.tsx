import { Api } from "../librarys/services/api";
import React, { useState, useEffect, createContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface IDashboardContext {
  token: string | null;
  idUser: string | null;
  portfolioInfo: IPortfolioInfo | null;
  isShowModalForm: boolean;
  setIsShowModalForm: React.Dispatch<React.SetStateAction<boolean>>;
  isShowModalFormEdit: boolean;
  setIsShowModalFormEdit: React.Dispatch<React.SetStateAction<boolean>>;
  isShowModalDelete: boolean;
  setIsShowModalDelete: React.Dispatch<React.SetStateAction<boolean>>;
  deletePort: () => void;
}

interface IPortfolioInfo {
  userId?: number;
  selectedLayout?: string;
  id?: number;
}

export const DashboardContext = createContext<IDashboardContext>(
  {} as IDashboardContext
);

export const DashboardProvider = () => {
  const navigate = useNavigate();
  const token: string | null = localStorage.getItem("@PortGeek:token");
  const idUser: string | null = localStorage.getItem("@PortGeek:uuid");
  const [isShowModalForm, setIsShowModalForm] = useState<boolean>(false);
  const [isShowModalFormEdit, setIsShowModalFormEdit] =
    useState<boolean>(false);
  const [isShowModalDelete, setIsShowModalDelete] = useState<boolean>(false);
  const [portfolioInfo, setPortfolioInfo] = useState<IPortfolioInfo | null>(
    {} as IPortfolioInfo
  );
  console.log(portfolioInfo);
  useEffect(() => {
    // token &&
    Api.get(`/portfolio?userId=4`)
      .then(({ data }) => {
        const newData = data.map((element: IPortfolioInfo): IPortfolioInfo => {
          const newObject = {
            userId: element.userId,
            selectedLayout: element.selectedLayout,
            id: element.id,
          };
          return newObject;
        });
        setPortfolioInfo(newData[0]);
      })
      .catch((err) => {
        window.localStorage.clear();
        navigate("/");
      });
  }, [token, navigate, idUser]);

  function deletePort() {
    Api.delete(`/portfolio/${portfolioInfo && portfolioInfo.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      res && toast.success("Portfolio deletado com sucesso!");
      setIsShowModalForm(false);
      setPortfolioInfo(null);
    });
  }

  return (
    <DashboardContext.Provider
      value={{
        token,
        idUser,
        portfolioInfo,
        isShowModalForm,
        setIsShowModalForm,
        isShowModalFormEdit,
        setIsShowModalFormEdit,
        isShowModalDelete,
        setIsShowModalDelete,
        deletePort,
      }}
    >
      <Outlet />
    </DashboardContext.Provider>
  );
};
