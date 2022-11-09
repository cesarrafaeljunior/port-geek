import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { successToast, errorToast } from "../../toast/toast";
import { api, token } from "../../services/api";
import { postLogin, iUserLogin } from "../../services/postLogin";
import { postRegister, iRegisterData } from "../../services/postRegister";
import { iAPIData } from "./../../services/getProfile";
import { useContext } from "react";
import { truncate } from "fs";

export const UserContext = createContext<iUserContext>({} as iUserContext);

interface iUserContext {
  setUser: React.Dispatch<React.SetStateAction<iAPIData | null>>;
  user: iAPIData | null;
  handleLogin: (data: iUserLogin) => void;
  handleRegister: (data: iRegisterData) => void;
  emaiDefault: string;
  setEmailDefault: (state: string) => void;
  isOpenModalLogin: boolean;
  isOpenModalRegister: boolean;
  setIsOpenModalLogin: (value: boolean) => void;
  setIsOpenModalRegister: (value: boolean) => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface iUserProvider {
  children: ReactNode;
}

export function UserProvider({ children }: iUserProvider): JSX.Element {
  const [user, setUser] = useState<iAPIData | null>(null);
  const [emaiDefault, setEmailDefault] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [isOpenModalLogin, setIsOpenModalLogin] = useState<boolean>(false);
  const [isOpenModalRegister, setIsOpenModalRegister] =
    useState<boolean>(false);
  const navigate = useNavigate();

  const handleRegister = async (data: iRegisterData) => {
    delete data.confirmPassword;

    try {
      const response = await postRegister(data);
      console.log(await response);
      successToast("Successfully registered!");
      setIsOpenModalRegister(false);
      setIsOpenModalLogin(true);
    } catch (error: any) {
      console.log(error);
      const message: string = error.response.data;
      errorToast(`${message}!`);
    }
  };

  const handleLogin = async (data: iUserLogin) => {
    try {
      const response = await postLogin(data);
      console.log(await response);
      successToast("Login successfully!");
      setUser(response.data.user);
      localStorage.setItem("@PortGeek:token", response.data.accessToken);
      localStorage.setItem("@PortGeek:id", response.data.user.id);

      setIsOpenModalLogin(false);
      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.accessToken}`;
      navigate("/dashboard");
    } catch (error: any) {
      console.log(error);
      errorToast("Credenciais Incorretas");
    }
  };

  useEffect(() => {
    async function getUser() {
      if (token) {
        try {
          const idUser = await Number(localStorage.getItem("@PortGeek:id"));
          const response = await api.get(`/users/${idUser}`, {});
          console.log(await response);
          setUser(response.data);
        } catch (error) {
          localStorage.removeItem("@PortGeek:token");
          localStorage.removeItem("@PortGeek:id");
          console.log(error);
          navigate("/");
        }
      }
      navigate("/");
      setLoading(false);
    }
    getUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        loading,
        setUser,
        user,
        handleLogin,
        handleRegister,
        setEmailDefault,
        emaiDefault,
        isOpenModalLogin,
        isOpenModalRegister,
        setIsOpenModalLogin,
        setIsOpenModalRegister,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
