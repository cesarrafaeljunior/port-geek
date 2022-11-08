import { ExperienceStyled, iUserExperience } from "./style";

export const Experience = ({ fontSize, color, fontSizeP }: iUserExperience) => {
  return (
    <ExperienceStyled fontSize={fontSize} color={color} fontSizeP={fontSizeP}>
      <h2 className="Title__Experience">Experiência</h2>
      <p className="Paragraph__Experience">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum ipsa eaque
        expedita nam amet unde, eveniet omnis pariatur, autem dolores facere
        repudiandae? Quam est corporis numquam placeat facere, labore excepturi.
      </p>
    </ExperienceStyled>
  );
};
