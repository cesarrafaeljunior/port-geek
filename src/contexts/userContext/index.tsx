import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { successToast, errorToast } from "../../toast/toast";
import { api } from "../../services/api";
import { postLogin, iUserLogin } from "../../services/postLogin";
import { postRegister, iRegisterData } from "../../services/postRegister";
import { iAPIData } from "./../../services/getProfile";
import { useContext } from "react";
import { ModalContext } from "../../contexts/modalContext";
export const UserContext = createContext<iUserContext>({} as iUserContext);

interface iUserContext {
  user: iAPIData;
  handleLogin: (data: iUserLogin) => void;
  handleRegister: (data: iRegisterData) => void;
  isValidate: boolean;
  setisValidate: (state: boolean) => void;
  emaiDefault: string;
  setEmailDefault: (state: string) => void;
}

interface iUserProvider {
  children: ReactNode;
}

export function UserProvider({ children }: iUserProvider): JSX.Element {
  const [user, setUser] = useState<iAPIData>({} as iAPIData);
  console.log(user.id);
  const [isValidate, setisValidate] = useState<boolean>(false);
  const { setIsOpenModalLogin } = useContext(ModalContext);
  const [emaiDefault, setEmailDefault] = useState<string>("");
  const navigate = useNavigate();

  const handleRegister = (data: iRegisterData) => {
    delete data.confirmPassword;
    setisValidate(true);

    postRegister(data)
      .then(() => {
        successToast("Usuário cadastrado!");
        setIsOpenModalLogin(true);
      })
      .catch((err) => {
        err && errorToast("Ocorreu um erro!");
      })
      .finally(() => setisValidate(false));
  };

  const handleLogin = (data: iUserLogin) => {
    setisValidate(true);

    postLogin(data)
      .then((response) => {
        successToast("Login realizado!");
        setUser(response.data.user);
        localStorage.setItem("@PortGeek:token", response.data.accessToken);
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.accessToken}`;
        navigate("/dashboard", { replace: true });
      })
      .catch(() => errorToast("Usuário não encontrado!"))
      .finally(() => setisValidate(false));
  };

  return (
    <UserContext.Provider
      value={{
        user,
        handleLogin,
        handleRegister,
        isValidate,
        setisValidate,
        setEmailDefault,
        emaiDefault,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
