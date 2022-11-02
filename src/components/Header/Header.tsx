import "../../utils/i18n";
import { useTranslation } from "react-i18next";
import { Header, ImageSpace, Links, LinkSpace } from "./styles";
import logo from "../../assets/logo/logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const HeaderSpace = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header>
        <ImageSpace>
          <img src={logo} alt="Port Geek" />
        </ImageSpace>
        <LinkSpace>
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
