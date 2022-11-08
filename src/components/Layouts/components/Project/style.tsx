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
  position: relative;
  .ProjectImage__Box {
    display: flex;
    width: 80%;
    height: max-content;
    max-width: 18.75em;
    border: solid 2px var(--borderUserIcon);
    transition: all 0.3s;
    &:hover {
      cursor: pointer;

      transform: scale(1.5);
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    text-align: center;
    width: ${({ width }) => `${width}em`};
    height: ${({ heigth }) => `${heigth}em`};

    font-size: ${({ fontSize }) => `${fontSize}em`};
    font-weight: bold;
    color: ${({ color }) => color};
    background-color: ${({ bgColor }) => `var(${bgColor})`};
    border: ${({ borderColor }) => `var(${borderColor})`};
    border-radius: 8px;
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
