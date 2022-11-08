import "../../utils/i18n";
import { useTranslation } from "react-i18next";
import {
  BrazilButton,
  Header,
  ImageSpace,
  Links,
  LinkSpace,
  NavBarMenuBtn,
  UsaButton,
} from "./styles";
import logo from "../../assets/logo/logo.png";
import { useContext, useState } from "react";
import { ModalContext } from "../../contexts/modalContext";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";
import { GeneralContext } from "../../contexts/GeneralContext";

const HeaderSpace = () => {
  const { setIsOpenModalLogin } = useContext(ModalContext);
  const [show, setShow] = useState(false);
  function openMenu() {
    setShow((current) => !current);
  }

  const { setCurrentLanguage } = useContext(GeneralContext);

  const { t, i18n } = useTranslation();

  const changeLanguage = (value: any) => {
    i18n
      .changeLanguage(value)
      .then(() => {
        setCurrentLanguage(value);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Header>
        <NavBarMenuBtn onClick={() => openMenu()}>
          <IconContext.Provider
            value={{
              color: "var(--color-grey-0)",
            }}
          >
            <GiHamburgerMenu />
          </IconContext.Provider>
        </NavBarMenuBtn>
        <ImageSpace>
          <img src={logo} alt="Port Geek" />
        </ImageSpace>
        <LinkSpace show={show}>
          <AnchorLink href="#section-about" offset={100}>
            <Links onClick={() => openMenu()}>{t("About us")}</Links>
          </AnchorLink>
          <Links onClick={() => setIsOpenModalLogin(true)}>Login</Links>
          <UsaButton onClick={() => changeLanguage("en")} />
          <BrazilButton onClick={() => changeLanguage("pt")} />
        </LinkSpace>
      </Header>
    </>
  );
};

export default HeaderSpace;
