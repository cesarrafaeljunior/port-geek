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
      await postRegister(data);

      successToast("Usuário cadastrado!");
      setIsOpenModalRegister(false);
      setIsOpenModalLogin(true);
    } catch (error) {
      errorToast("Ocorreu um erro!");
    }
  };

  const handleLogin = (data: iUserLogin) => {
    postLogin(data)
      .then((response) => {
        successToast("Login realizado!");
        setUser(response.data.user);
        localStorage.setItem("@PortGeek:token", response.data.accessToken);
        localStorage.setItem("@PortGeek:id", response.data.user.id);
        navigate("/dashboard", { replace: true });
        setIsOpenModalLogin(false);
      })
      .catch(() => errorToast("Usuário não encontrado!"));
  };

  useEffect(() => {
    async function getUser() {
      if (token) {
        try {
          const idUser = localStorage.getItem("@PortGeek:id");
          const response = await api.get(`/users/${idUser}`);
          const { data } = response;
          // setNameUser(data.name);
          setUser(data);
        } catch (error) {
          localStorage.removeItem("@PortGeek:token");
          localStorage.removeItem("@PortGeek:id");
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
