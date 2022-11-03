import "../../utils/i18n";
import { useTranslation } from "react-i18next";
import { Header, ImageSpace, Links, LinkSpace, NavBarMenuBtn } from "./styles";
import logo from "../../assets/logo/logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";
import { useState } from "react";

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
            <Links>About us</Links>
          </AnchorLink>
          <Links>Login</Links>
        </LinkSpace>
      </Header>
    </>
  );
};

export default HeaderSpace;
