import { AboutStyled, iUserAbout } from "./style";

export const About = ({ fontSize, color, fontSizeP }: iUserAbout) => {
  return (
    <AboutStyled fontSize={fontSize} color={color} fontSizeP={fontSizeP}>
      <h2>Sobre mim</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, a ea
        possimus nisi necessitatibus maxime suscipit quo, dolorum odit cumque
        ipsa blanditiis quibusdam qui expedita inventore illo repellat ad
        laborum.
      </p>
    </AboutStyled>
  );
};
