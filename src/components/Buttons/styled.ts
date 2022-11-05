import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

export interface IStyledButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundcolor: string;
  lettercolor: string;
  hovercolor?: string;
  buttonsize?: string;
  fontsize?: string;
}

export const StyledButton = styled.button<IStyledButton>`
  background-color: ${(props) => props.backgroundcolor};
  color: ${(props) => props.lettercolor};

  border: var(--border-size-2) solid transparent;
  border-radius: var(--radius-6);

  padding: ${(props) =>
      props.buttonsize ? props.buttonsize : `var(--padding-8)`}
    0;

  width: 100%;

  font-size: ${(props) =>
    props.fontsize ? props.fontsize : `var(--font-subtitle-20)`};

  opacity: 0.9;
  transition: 1s ease;

  &:hover {
    opacity: 1;
    background-color: ${(props) => props.hovercolor};
  }
`;
