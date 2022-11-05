import "../../utils/i18n";
import { useTranslation } from "react-i18next";
import { Header, ImageSpace, Links, LinkSpace, NavBarMenuBtn } from "./styles";
import logo from "../../assets/logo/logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";
import { useState } from "react";
import { ButtonComponent } from "../Buttons";

export interface ShowProps {
  show: boolean;
}

const HeaderSpace = () => {
  const [show, setShow] = useState(false);

  const { t } = useTranslation();
  function openMenu() {
    setShow((current) => !current);
  }
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
          <AnchorLink href="#section-about">
            <ButtonComponent
              onClick={() => openMenu()}
              backgroundcolor={"transparent"}
              lettercolor={"var(--color-white-mode)"}
            >
              About us
            </ButtonComponent>
          </AnchorLink>
          <ButtonComponent
            backgroundcolor={"transparent"}
            lettercolor={"var(--color-white-mode)"}
          >
            Login
          </ButtonComponent>
        </LinkSpace>
      </Header>
    </>
  );
};

export default HeaderSpace;
