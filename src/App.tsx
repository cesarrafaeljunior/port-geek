import { useContext } from "react";
import { Modal } from "./components/modalRegister/modalRegister";
import { ModalLogin } from "./components/modalLogin/modalLogin";
import RoutesMain from "./routes";
import { UserProvider } from "./contexts/userContext";
import { UserContext } from "./contexts/userContext";

function App() {
  const {
    isOpenModalRegister,
    setIsOpenModalRegister,
    isOpenModalLogin,
    setIsOpenModalLogin,
  } = useContext(UserContext);

  return (
    <>
      {isOpenModalRegister && <Modal setModal={setIsOpenModalRegister} />}
      {isOpenModalLogin && <ModalLogin setModal={setIsOpenModalLogin} />}
      <UserProvider>
        <RoutesMain />
      </UserProvider>
    </>
  );
}

export default App;
