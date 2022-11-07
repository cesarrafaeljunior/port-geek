import { FormationStyled, iUserFormation } from "./style";

export const Formation = ({ fontSize, color, fontSizeP }: iUserFormation) => {
  return (
    <FormationStyled fontSize={fontSize} color={color} fontSizeP={fontSizeP}>
      <h2>Formação</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, neque.
        Incidunt earum enim vitae nemo libero ex voluptates laudantium ea,
        consectetur aspernatur esse hic fugiat minus corrupti dicta. Culpa,
        odit!
      </p>
    </FormationStyled>
  );
};
