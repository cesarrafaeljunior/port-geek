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
import backGroundBtn from "../../assets/img/backgroundBtn.png";
import logo from "../../assets/logo/logo-removebg-preview 1.png";
import { ModalDelete } from "../../components/ModalDelete";

export const Dashboard = () => {
  const {
    token,
    idUser,
    portfolioInfo,
    isShowModalForm,
    setIsShowModalForm,
    isShowModalFormEdit,
    setIsShowModalFormEdit,
    isShowModalDelete,
    setIsShowModalDelete,
  } = useContext(DashboardContext);
  console.log(portfolioInfo);
  return (
    <Container>
      <header>
        <div className="div-header">
          <img className="logo" src={logo} alt="" />

          <div className="container-user">
            <span>César Rafael</span>
            <div className="div-link">
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
          </div>
        </div>
      </header>

      <div className="container-secondary">
        {portfolioInfo.id ? (
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
              <IconTrash onClick={() => setIsShowModalDelete(true)} />
              <IconShare
                onClick={() => {
                  toast.success("Link copiado com sucesso!");
                  navigator.clipboard.writeText(
                    `${window.location.href}portfolio/${portfolioInfo}`
                  );
                }}
              />
            </div>
          </div>
        ) : (
          <div className="div-alert">
            <p>You don't have created a Portfolio yet!</p>
          </div>
        )}
        <div className="container-final">
          <ButtonNewLayout type="button">Create Portfolio</ButtonNewLayout>
          <img className="background-btn" src={backGroundBtn} alt="" />
        </div>
      </div>
      {isShowModalDelete && <ModalDelete />}
    </Container>
  );
};
