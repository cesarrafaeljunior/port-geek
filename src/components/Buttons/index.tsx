import { ButtonHTMLAttributes } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const ButtonComponent = ({ children, ...rest }: IButton) => {
  return <button {...rest}>{children}</button>;
};
