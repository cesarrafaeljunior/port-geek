import { IStyledButton, StyledButton } from "./styled";

export const ButtonComponent = ({
  children,
  backgroundcolor,
  lettercolor,
  hovercolor,
  buttonsize,
  fontsize,
  ...rest
}: IStyledButton) => {
  return (
    <StyledButton
      backgroundcolor={backgroundcolor}
      lettercolor={lettercolor}
      hovercolor={hovercolor}
      buttonsize={buttonsize}
      fontsize={fontsize}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};