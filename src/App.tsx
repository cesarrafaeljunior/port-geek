import { useContext } from "react";
import { ModalContext } from "../src/contexts/modalContext";
import { Modal } from "./components/modalRegister/modalRegister";
import { ModalLogin } from "./components/modalLogin/modalLogin";
import RoutesMain from "./routes";
import { UserProvider } from "./contexts/userContext";

function App() {
  const {
    isOpenModalRegister,
    setIsOpenModalRegister,
    isOpenModalLogin,
    setIsOpenModalLogin,
  } = useContext(ModalContext);
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
