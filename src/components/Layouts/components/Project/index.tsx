import { ProjectStyled } from "./style";

export const Project = () => {
  return (
    <ProjectStyled>
      <div>
        <figure>
          <img src="" alt="Imagem do projeto" />
        </figure>
      </div>
      <button>Deploy do projeto</button>
      <button>Repositório do projeto</button>
      <button>Descrição do projeto</button>
    </ProjectStyled>
  );
};
