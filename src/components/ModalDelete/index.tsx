import { Container } from "./styles";
import { useContext } from "react";
import { toast } from "react-toastify";
import { DashboardContext } from "../../contexts/DashboardContext";

export const ModalDelete = () => {
  const { setIsShowModalDelete, deletePort } = useContext(DashboardContext);
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
              toast.success("Portfolio deleted!");
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
