import { iButtons, ProjectStyled } from "./style";
import ProjectIcon from "../../../../assets/img/1092.png";

export const Project = ({
  width,
  heigth,
  fontSize,
  color,
  bgColor,
  borderColor,
}: iButtons) => {
  return (
    <ProjectStyled
      width={width}
      heigth={heigth}
      fontSize={fontSize}
      color={color}
      bgColor={bgColor}
      borderColor={borderColor}
      className="Container__Project"
    >
      <h2 className="Project__Title">Projeto Principal</h2>
      <div className="Project__Flex--Box">
        <div className="ProjectImage__Box">
          <figure>
            <img src={ProjectIcon} alt="Imagem do projeto" />
          </figure>
        </div>
        <div className="Buttons__Box">
          <button type="button">Deploy do projeto</button>
          <button type="button">Repositório do projeto</button>
          <button type="button">Descrição do projeto</button>
        </div>
      </div>
    </ProjectStyled>
  );
};
