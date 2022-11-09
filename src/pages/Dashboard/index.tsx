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
import logo from "../../assets/logo/logo.png";
import { ModalDelete } from "../../components/ModalDelete";
import PortfolioProvider from "../../contexts/PortifolioContext";
import PortFormModal from "../../components/Modals/PortFormModal";
import { Navigate } from "react-router-dom";



export const Dashboard = () => {
  const {
    token,
    portfolioInfo,
    portCreateAuth,
    setPortCreateAuth,
    isShowModalFormEdit,
    setIsShowModalFormEdit,
    isShowModalDelete,
    setIsShowModalDelete,
    nameUser,
  } = useContext(DashboardContext);
  

  return (
    <>
      {token ? (
        <Container>
          <header>
            <div className="div-header">
              <img className="logo" src={logo} alt="" />

              <div className="container-user">
                <span>{nameUser}</span>
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
            {portfolioInfo && portfolioInfo.id ? (
              <main>
                {portfolioInfo.selectedLayout === "layout-1" && (
                  <img className="mini-port" src={imgPortfolio1} alt="" />
                )}
                {portfolioInfo.selectedLayout === "layout-2" && (
                  <img className="mini-port" src={imgPortfolio2} alt="" />
                )}
                {portfolioInfo.selectedLayout === "layout-3" && (
                  <img className="mini-port" src={imgPortfolio3} alt="" />
                )}
                <div className="buttons">
                  <IconEdit onClick={() => setPortCreateAuth(true)} />
                  <IconTrash onClick={() => setIsShowModalDelete(true)} />
                  <IconShare
                    onClick={() => {
                      toast.success("Link copiado com sucesso!");
                      navigator.clipboard.writeText(
                        `${window.location.href}/portfolio/${portfolioInfo.id}`
                      );
                    }}
                  />
                </div>
              </main>
            ) : (
              <div className="div-alert">
                <p>You don't have created a Portfolio yet!</p>
              </div>
            )}
            <div className="container-final">
              <ButtonNewLayout
                backgroundColor={
                  portfolioInfo && portfolioInfo.id
                    ? "var(--color-grey-2)"
                    : "var(--color-grey-3)"
                }
                cursorPointer={
                  portfolioInfo && portfolioInfo.id ? "unset" : "pointer"
                }
                setScale={portfolioInfo && portfolioInfo.id ? "unset" : "0.95"}
                type="button"
                onClick={() => {
                  portfolioInfo && portfolioInfo.id
                    ? toast.warning(
                        "You need to delete the current Portfolio to create a new one!"
                      )
                    : setPortCreateAuth(true);
                }}
              >
                Create Portfolio
              </ButtonNewLayout>
              <img className="background-btn" src={backGroundBtn} alt="" />
            </div>
          </div>
          {isShowModalDelete && <ModalDelete />}
          {portCreateAuth && <PortFormModal />}
          <PortfolioProvider>
            <PortFormModal />
          </PortfolioProvider>
        </Container>
      ) : (
        <Navigate to={"/"} />
      )}
    </>
  );
};
