import "../../utils/i18n";
import { useTranslation } from "react-i18next";
import { Header, ImageSpace, Links, LinkSpace } from "./styles";
import logo from "../../assets/logo/logo.png";

const HeaderSpace = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header>
        <ImageSpace>
          <img src={logo} alt="Port Geek" />
        </ImageSpace>
        <LinkSpace>
          <Links to={"/"}>About us</Links>
          <Links to={"/"}>Login</Links>
        </LinkSpace>
      </Header>
    </>
  );
};

export default HeaderSpace;
