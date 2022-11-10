import { AboutStyled, iUserAbout } from "./style";

interface IABout extends iUserAbout {
  aboutYou: string;
}

export const About = ({ fontSize, color, fontSizeP, aboutYou }: IABout) => {
  return (
    <AboutStyled fontSize={fontSize} color={color} fontSizeP={fontSizeP}>
      <h2 className="Border--Bottom">About me</h2>
      <p>
        {aboutYou}
      </p>
    </AboutStyled>
  );
};
