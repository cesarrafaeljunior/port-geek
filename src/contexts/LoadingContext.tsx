import { createContext, ReactNode, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

interface ILoadingContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
interface IloadingProviderProps {
  children: ReactNode;
}

export const LoadingContext = createContext<ILoadingContext>(
  {} as ILoadingContext
);

const LoadingProvider = ({ children }: IloadingProviderProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  // useEffect(() => {
  //   setLoading(false);
  // }, []);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
