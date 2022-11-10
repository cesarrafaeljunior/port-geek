import { iUserSkills, SkillsStyled } from "./style";

interface ISkills extends iUserSkills {
  skillDescription: string;
}

export const Skills = ({ fontSize, color, fontSizeP, skillDescription }: ISkills) => {
  return (
    <SkillsStyled fontSize={fontSize} color={color} fontSizeP={fontSizeP}>
      <h2 className="Border--Bottom">Skills</h2>
      <p>{skillDescription}</p>
    </SkillsStyled>
  );
};
