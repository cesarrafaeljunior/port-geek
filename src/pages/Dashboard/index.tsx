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
import imgPortfolio1 from "../../assets/img/Layout-1.png";
import imgPortfolio2 from "../../assets/img/Layout-2.png";
import imgPortfolio3 from "../../assets/img/Layout-3.png";
import backGroundBtn from "../../assets/img/backgroundBtn.png";
import logo from "../../assets/logo/logo.png";
import { ModalDelete } from "../../components/ModalDelete";
import PortFormModal from "../../components/Modals/PortFormModal";

import { UserContext } from "../../contexts/userContext";

export const Dashboard = () => {
  const {
    portfolioInfo,
    setPortCreateAuth,
    setIsShowModalDelete,
    setEditPortAuth,
  } = useContext(DashboardContext);

  const baseLink: string = window.location.href;
  const shareLink: string = `${baseLink.slice(
    0,
    baseLink.length - 9
  )}portfolio/${portfolioInfo?.id}`;

  const { user, setUser } = useContext(UserContext);
  return (
    <Container>
      <header>
        <div className="div-header">
          <img className="logo" src={logo} alt="" />

          <div className="container-user">
            <span>{user?.name}</span>
            <div className="div-link">
              <Link
                to={"/"}
                onClick={() => {
                  window.localStorage.clear();
                  toast.success("Logout Successfully!");
                  setUser(null);
                }}
              >
                Logout
              </Link>
              <div></div>
            </div>
          </div>
        </div>
      </header>

      <div className="container-secondary">
        {portfolioInfo?.id ? (
          <main>
            <a 
              href={shareLink}
              target="_blank"
              rel="noreferrer"
              className="mini-port" 
            >
              {portfolioInfo.project.selected_layout === "layout-1" && (
                <img
                  className="mini-port"
                  src={imgPortfolio1}
                  alt=""
                />
              )}
              {portfolioInfo.project.selected_layout === "layout-2" && (
                <img
                  className="mini-port"
                  src={imgPortfolio2}
                  alt=""
                />
              )}
              {portfolioInfo.project.selected_layout === "layout-3" && (
                <img
                  className="mini-port"
                  src={imgPortfolio3}
                  alt=""
                />
              )}
            </a>
            <div className="buttons">
              <IconEdit onClick={() => setEditPortAuth(true)} />
              <IconTrash onClick={() => setIsShowModalDelete(true)} />
              <IconShare
                onClick={() => {
                  toast.success("Link copiado com sucesso!");
                  navigator.clipboard.writeText(`${shareLink}`);
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
              portfolioInfo?.id ? "var(--color-grey-2)" : "var(--color-grey-3)"
            }
            cursorPointer={portfolioInfo?.id ? "unset" : "pointer"}
            setScale={portfolioInfo?.id ? "unset" : "0.95"}
            type="button"
            onClick={() => {
              portfolioInfo
                ? toast.warning(
                    "You need to delete the current Portfolio to create a new one!",
                    {
                      autoClose: 3000,
                    }
                  )
                : setPortCreateAuth(true);
            }}
          >
            Create Portfolio
          </ButtonNewLayout>
          <img className="background-btn" src={backGroundBtn} alt="" />
        </div>
      </div>
      <ModalDelete />
      <PortFormModal />
    </Container>
  );
};
