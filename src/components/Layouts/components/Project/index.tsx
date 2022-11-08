import { iButtons, ProjectStyled } from "./style";

interface IProject extends iButtons {
  deployLink: string;
  repositoryLink: string;
  projectDescription: string;
  projectImg: string;
}

export const Project = ({
  width,
  heigth,
  fontSize,
  color,
  bgColor,
  borderColor,
  deployLink,
  repositoryLink,
  projectDescription,
  projectImg
}: IProject) => {
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
            <img src={projectImg} alt="Imagem do projeto" />
          </figure>
        </div>
        <div className="Buttons__Box">
          <a href={deployLink}>Deploy do projeto</a>
          <a href={repositoryLink}>Repositório do projeto</a>
          <button type="button">Descrição do projeto</button>
        </div>
      </div>
    </ProjectStyled>
  );
};
