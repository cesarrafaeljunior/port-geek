import { iUserSkills, SkillsStyled } from "./style";

export const Skills = ({ fontSize, color, fontSizeP }: iUserSkills) => {
  return (
    <SkillsStyled fontSize={fontSize} color={color} fontSizeP={fontSizeP}>
      <h2 className="Border--Bottom">Habilidades</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
        doloribus excepturi ducimus, sequi mollitia facere ut atque? Consequatur
        amet enim, tempora corrupti labore voluptate fuga facere officia
        voluptates, vitae eum?
      </p>
    </SkillsStyled>
  );
};
