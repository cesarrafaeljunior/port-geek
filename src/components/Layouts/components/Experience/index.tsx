import { ExperienceStyled, iUserExperience } from "./style";

export const Experience = ({ fontSize, color, fontSizeP }: iUserExperience) => {
  return (
    <ExperienceStyled fontSize={fontSize} color={color} fontSizeP={fontSizeP}>
      <h2>Experiência</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum ipsa eaque
        expedita nam amet unde, eveniet omnis pariatur, autem dolores facere
        repudiandae? Quam est corporis numquam placeat facere, labore excepturi.
      </p>
    </ExperienceStyled>
  );
};
