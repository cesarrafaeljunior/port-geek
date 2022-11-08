import { useContext } from "react";
// import { ModalContext } from "../src/contexts/modalContext";
import { UserContext } from "./contexts/userContext";
import { Modal } from "./components/modalRegister/modalRegister";
import { ModalLogin } from "./components/modalLogin/modalLogin";
import RoutesMain from "./routes";
import GeneralProvider from "./contexts/GeneralContext";

function App() {
  const {
    isOpenModalRegister,
    setIsOpenModalRegister,
    isOpenModalLogin,
    setIsOpenModalLogin,
  } = useContext(UserContext);

  return (
    <>
      <GeneralProvider>
        {isOpenModalRegister && <Modal setModal={setIsOpenModalRegister} />}
        {isOpenModalLogin && <ModalLogin setModal={setIsOpenModalLogin} />}
        <RoutesMain />
      </GeneralProvider>
    </>
  );
}

export default App;
