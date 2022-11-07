import { FormationStyled, iUserFormation } from "./style";

export const Formation = ({ fontSize, color, fontSizeP }: iUserFormation) => {
  return (
    <FormationStyled
      fontSize={fontSize}
      color={color}
      fontSizeP={fontSizeP}
      className="Container__Formation"
    >
      <h2 className="Title__Formation">Formação</h2>
      <p className="Paragraph__Formation">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, neque.
        Incidunt earum enim vitae nemo libero ex voluptates laudantium ea,
        consectetur aspernatur esse hic fugiat minus corrupti dicta. Culpa,
        odit!
      </p>
    </FormationStyled>
  );
};
