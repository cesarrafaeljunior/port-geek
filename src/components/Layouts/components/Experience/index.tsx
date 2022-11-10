import { ExperienceStyled, iUserExperience } from "./style";

interface IExperience extends iUserExperience {
  experienceDescription: string;
}

export const Experience = ({ fontSize, color, fontSizeP, experienceDescription }: IExperience) => {
  return (
    <ExperienceStyled 
      fontSize={fontSize} 
      color={color} 
      fontSizeP={fontSizeP}
    >
      <h2 className="Title__Experience">Experience</h2>
      <p className="Paragraph__Experience">{experienceDescription}</p>
    </ExperienceStyled>
  );
};
