import { Api } from "../librarys/services/api";
import React, { useState, useEffect, createContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface IDashboardContext {
  token: string | null;
  userId: string | null;
  portfolioInfo: IPortfolioInfo;
  isShowModalForm: boolean;
  setIsShowModalForm: React.Dispatch<React.SetStateAction<boolean>>;
  isShowModalFormEdit: boolean;
  setIsShowModalFormEdit: React.Dispatch<React.SetStateAction<boolean>>;
  isShowModalDelete: boolean;
  setIsShowModalDelete: React.Dispatch<React.SetStateAction<boolean>>;
  deletePort: () => void;
}

interface IPortfolioInfo {
  userId: number;
  selectedLayout: string;
  id: number;
}

export const DashboardContext = createContext<IDashboardContext>(
  {} as IDashboardContext
);

export const DashboardProvider = () => {
  const navigate = useNavigate();
  const token: string | null = localStorage.getItem("@PortGeek:token");
  const userId: string | null = localStorage.getItem("@PortGeek:uuid");
  const [isShowModalForm, setIsShowModalForm] = useState<boolean>(false);
  const [isShowModalFormEdit, setIsShowModalFormEdit] =
    useState<boolean>(false);
  const [isShowModalDelete, setIsShowModalDelete] = useState<boolean>(false);
  const [portfolioInfo, setPortfolioInfo] = useState<IPortfolioInfo>(
    {} as IPortfolioInfo
  );

  useEffect(() => {
    token &&
      Api.get<IPortfolioInfo>(`/portfolio?userId=${userId}`)
        .then((res) => {
          const objectRes = {
            userId: res.data.userId,
            selectedLayout: res.data.selectedLayout,
            id: res.data.id,
          };
          setPortfolioInfo(objectRes);
        })
        .catch((err) => {
          window.localStorage.clear();
          navigate("/");
        });
  }, [token, userId, navigate, portfolioInfo]);

  function deletePort() {
    Api.delete(`/portfolio/${portfolioInfo.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(() => {
      toast.success("Portfolio deletado com sucesso!");
      setIsShowModalForm(false);
    });
  }

  return (
    <DashboardContext.Provider
      value={{
        token,
        userId,
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
