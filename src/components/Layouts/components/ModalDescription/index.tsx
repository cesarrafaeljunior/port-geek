import { ContainerModalDescription, iModalDescription } from "./style";
import { AiFillCloseCircle } from "react-icons/ai";

export const ModalDescription = ({
  bgColor,
  color,
  borderColor,
}: iModalDescription) => {
  return (
    <ContainerModalDescription
      bgColor={bgColor}
      color={color}
      borderColor={borderColor}
    >
      <div className="Modal">
        <AiFillCloseCircle className="IconClose" />
        <h2>Descrição do projeto</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          explicabo quas quis quia, odio minima quisquam nulla omnis nesciunt
          earum, sint officiis eaque. Eos numquam debitis unde, nihil fuga a?
        </p>
      </div>
    </ContainerModalDescription>
  );
};
