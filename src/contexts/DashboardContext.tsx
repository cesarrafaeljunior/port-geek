import { Api } from "../librarys/services/api";
import React, { useState, useEffect, createContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface IDashboardContext {
  token: string | null;
  userId: string | null;
  portfolioInfo: IPortfolioInfo;
  isShowModal: boolean;
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
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
      setIsShowModal(false);
    });
  }

  return (
    <DashboardContext.Provider
      value={{
        token,
        userId,
        portfolioInfo,
        isShowModal,
        setIsShowModal,
        deletePort,
      }}
    >
      <Outlet />
    </DashboardContext.Provider>
  );
};
