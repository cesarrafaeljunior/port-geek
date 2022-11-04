import "../../utils/i18n";
import { useTranslation } from "react-i18next";
import { Header, ImageSpace, Links, LinkSpace } from "./styles";
import logo from "../../assets/logo/logo.png";
import { useContext } from "react";
import { ModalContext } from "../../contexts/modalContext";


const HeaderSpace = () => {
  const { setIsOpenModalLogin } = useContext(ModalContext);
  const { t } = useTranslation();
  return (
    <>
      <Header>
        <ImageSpace>
          <img src={logo} alt="Port Geek" />
        </ImageSpace>
        <LinkSpace>
          <Links to={"/"}>About us</Links>
          <button onClick={()=>setIsOpenModalLogin(true)}>Login</button>
        </LinkSpace>
      </Header>
    </>
  );
};

export default HeaderSpace;
