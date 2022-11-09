import { Container } from "./styles";
import { useContext } from "react";
import { DashboardContext } from "../../contexts/DashboardContext";

export const ModalDelete = () => {
  const { setIsShowModalDelete, deletePort, isShowModalDelete } =
    useContext(DashboardContext);

  if (!isShowModalDelete) {
    return null;
  }

  return (
    <Container>
      <div className="modal">
        <h2>Are you sure do you want delete this portfolio?</h2>
        <div className="div-btn">
          <button
            className="btnYes"
            type="button"
            onClick={() => {
              deletePort();
              setIsShowModalDelete(false);
            }}
          >
            Yes
          </button>
          <button
            className="btnNo"
            type="button"
            onClick={() => setIsShowModalDelete(false)}
          >
            No
          </button>
        </div>
      </div>
    </Container>
  );
};
