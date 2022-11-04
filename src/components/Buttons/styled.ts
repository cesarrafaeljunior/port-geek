import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

export interface iStyledButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundcolor: string;
  lettercolor: string;
  hovercolor: string;
  buttonsize?: string;
}

export const StyledButton = styled.button<iStyledButton>`
  background-color: ${(props) => props.backgroundcolor};
  color: ${(props) => props.lettercolor};

  border: var(--border-size-2) solid transparent;
  border-radius: var(--border-radius-6);

  padding: ${(props) =>
      props.buttonsize ? props.buttonsize : `var(--button-height-default)`}
    0;

  width: 100%;

  &:hover {
    background-color: ${(props) => props.hovercolor};
  }
`;
