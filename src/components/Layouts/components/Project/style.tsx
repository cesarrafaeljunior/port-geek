import styled from "styled-components";

export interface iButtons {
  width: number;
  heigth: number;
  fontSize: number;
  color: string;
  bgColor: string;
  borderColor: string;
}

export const ProjectStyled = styled.section<iButtons>`
  .ProjectImage__Box {
    display: flex;
    width: 80%;
    height: max-content;
    max-width: 18.75em;
    border: solid 2px var(--borderUserIcon);
    img {
      width: 100%;
      height: 100%;
    }
  }
  button {
    width: ${({ width }) => `${width}em`};
    height: ${({ heigth }) => `${heigth}em`};

    font-size: ${({ fontSize }) => `${fontSize}em`};
    font-weight: bold;
    color: ${({ color }) => color};
    background-color: ${({ bgColor }) => `var(${bgColor})`};
    border: ${({ borderColor }) => `var(${borderColor})`};
    border-radius: 8px;
  }
`;
