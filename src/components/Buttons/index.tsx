import { iStyledButton, StyledButton } from "./styled";

export const ButtonComponent = ({
  children,
  backgroundcolor,
  lettercolor,
  hovercolor,
  buttonsize,
  ...rest
}: iStyledButton) => {
  return (
    <StyledButton
      backgroundcolor={backgroundcolor}
      lettercolor={lettercolor}
      hovercolor={hovercolor}
      buttonsize={buttonsize}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};
