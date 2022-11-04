
import { useContext } from "react"
import { ModalContext } from "../src/contexts/modalContext"

import LandingPage from "./pages/LandingPage/LandingPage";
import { Modal } from "./components/modalRegister/modalRegister";
import {ModalLogin} from "./components/modalLogin/modalLogin"

function App() {
  const {isOpenModalRegister,setIsOpenModalRegister,isOpenModalLogin,setIsOpenModalLogin} = useContext(ModalContext)
  return (
    <>
      
      <LandingPage />
      {isOpenModalRegister && <Modal  setModal={setIsOpenModalRegister}/>}
      {isOpenModalLogin && <ModalLogin setModal={setIsOpenModalLogin}/>}
    </>
  );
}

export default App;
