import styled from "styled-components";

export interface iStyledInfos {
  fontSize: number;
  fontSizeP: number;
  color: string;
}

export const UserInfosStyled = styled.section<iStyledInfos>`
  h1 {
    font-size: ${({ fontSize }) => `${fontSize}em`};
    color: ${({ color }) => `var(${color})`};
    font-weight: 700;
  }
  p {
    font-size: ${({ fontSizeP }) => `${fontSizeP}em`};
    font-weight: 500;
    color: ${({ color }) => `var(${color})`};
  }
`;
