import {
  Container,
  IconTrash,
  IconEdit,
  IconShare,
  ButtonNewLayout,
  LinkStyle as Link,
} from "./styles";
import { DashboardContext } from "../../contexts/DashboardContext";
import { useContext } from "react";
import { toast } from "react-toastify";
import imgPortfolio1 from "../../assets/img/05_resume_template.png";
import imgPortfolio2 from "../../assets/img/1092.png";
import imgPortfolio3 from "../../assets/img/5215985.png";
import backGroundBtn from "../../assets/img/Purple Illustration Simple Creative Chat With People Application Instagram Post (2).png";
import logo from "../../assets/logo/logo-removebg-preview 1.png";

export const Dashboard = () => {
  const { token, userId, portfolioInfo, isShowModal, setIsShowModal } =
    useContext(DashboardContext);

  return (
    <Container>
      <header>
        <img className="logo" src={logo} alt="" />

        <div className="container-user">
          <span>César Rafael</span>
          <Link
            to={"/"}
            onClick={() => {
              window.localStorage.clear();
              toast.success("Logout Successfully!");
            }}
          >
            Logout
          </Link>
        </div>
      </header>

      <div className="container-secondary">
        <div className="portfolio">
          <img className="mini-port" src={imgPortfolio1} alt="" />
          {/* {portfolioInfo.selectedLayout === "layout1" && (
            <img src={imgPortfolio1} alt="" />
          )}
          {portfolioInfo.selectedLayout === "layout2" && (
            <img src={imgPortfolio2} alt="" />
          )}
          {portfolioInfo.selectedLayout === "layout3" && (
            <img src={imgPortfolio3} alt="" />
          )} */}
          <div className="buttons">
            <IconEdit />
            <IconTrash />
            <IconShare />
          </div>
        </div>
        <div className="container-final">
          <ButtonNewLayout type="button">Criar Portfolio</ButtonNewLayout>
          <img className="background-btn" src={backGroundBtn} alt="" />
        </div>
      </div>
    </Container>
  );
};
