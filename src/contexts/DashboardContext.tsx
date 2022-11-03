import { Api } from "../librarys/services/api";
import { useState, useEffect, createContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";

interface IDashboardContext {
  token: string | null;
  userId: string | null;
  portfolioInfo: IPortfolioInfo;
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

  return (
    <DashboardContext.Provider value={{ token, userId, portfolioInfo }}>
      <Outlet />
    </DashboardContext.Provider>
  );
};
