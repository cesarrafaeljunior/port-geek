import { ContainerModalDescription, IContainerModal } from "./style";
import { AiFillCloseCircle } from "react-icons/ai";
import { Dispatch, SetStateAction } from "react";

interface IModalDescription extends IContainerModal {
  projectDescription: string;
  toggleMenu: Dispatch<SetStateAction<boolean>>;
}

export const ModalDescription = ({
  bgColor,
  color,
  borderColor,
  projectDescription,
  toggleMenu
}: IModalDescription) => {
  return (
    <ContainerModalDescription
      bgColor={bgColor}
      color={color}
      borderColor={borderColor}
    >
      <div className="Modal">
        <button 
          type="button"
          className="IconClose"
          onClick={() => {toggleMenu(false)}}
        >
          <AiFillCloseCircle />
        </button>
        <h2>Description</h2>
        <p>{projectDescription}</p>
      </div>
    </ContainerModalDescription>
  );
};
