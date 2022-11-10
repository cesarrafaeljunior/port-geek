import { FormationStyled, iUserFormation } from "./style";

interface IFormation extends iUserFormation {
  formationDescription: string;
}

export const Formation = ({ fontSize, color, fontSizeP, formationDescription }: IFormation) => {
  return (
    <FormationStyled
      fontSize={fontSize}
      color={color}
      fontSizeP={fontSizeP}
      className="Container__Formation"
    >
      <h2 className="Title__Formation">Academic degree</h2>
      <p className="Paragraph__Formation">{formationDescription}</p>
    </FormationStyled>
  );
};
