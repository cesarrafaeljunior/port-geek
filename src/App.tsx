
import { useContext } from "react"
import { ModalContext } from "../src/contexts/modalContext"
import { Modal } from "./components/modalRegister/modalRegister";
import {ModalLogin} from "./components/modalLogin/modalLogin"
import RoutesMain from "./routes";

function App() {
  const {isOpenModalRegister,setIsOpenModalRegister,isOpenModalLogin,setIsOpenModalLogin} = useContext(ModalContext)
  return (
    <>
      
      {isOpenModalRegister && <Modal  setModal={setIsOpenModalRegister}/>}
      {isOpenModalLogin && <ModalLogin setModal={setIsOpenModalLogin}/>}
      <RoutesMain />
    </>
  );
}

export default App;
