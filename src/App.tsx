
import { useContext } from "react"
import { ModalContext } from "../src/contexts/modalContext"

import LandingPage from "./pages/LandingPage/LandingPage";
import { Modal } from "./components/modalRegister/modalRegister";

function App() {
  const {isOpenModalRegister,setIsOpenModalRegister} = useContext(ModalContext)
  return (
    <>
      <LandingPage />
      {isOpenModalRegister && <Modal  setModal={setIsOpenModalRegister}/>}
      
    
    </>
  );
}

export default App;
