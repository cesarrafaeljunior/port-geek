import styled from "styled-components";

export interface IconUserTP {
  width: number;
  height: number;
  borderR: number;
  border: string;
}

export const UserIconStyled = styled.div<IconUserTP>`
  img {
    width: ${({ width }) => `${width}em`};
    height: ${({ height }) => `${height}em`};
    object-fit: cover;
    border-radius: ${({ borderR }) => `${borderR}%`};
    border: ${({ border }) => `solid 2px var(--${border})`};
  }
`;
