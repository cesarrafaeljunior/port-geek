import styled from "styled-components";

interface IStyledDiv {
  bordercolor?: string;
  color?:string,
}

export const StyledDiv = styled.div<IStyledDiv>`
  display: flex;
  flex-direction: column;
  gap: var(--gap-8);
  font-family: var(--font-primary-nunito);
  font-size: var(--font-subtitle-18);
  width: 100%;
  /* margin-bottom: 10px */

  & > label {
    font-weight: var(--font-weight-600);
    margin-bottom: 10px;
  }

  & input {
    width: 100%;
    padding: var(--padding-8);
    background-color: var(--color-grey-0);
    color: var(--color-grey-3);
    border: 1px solid var(--color-grey-3);
    border-radius: var(--radius-6);

    &::placeholder {
      font-family: var(--font-secondary-inter);
      font-size: var(--font-text-16);
      color: var(--color-grey-3);
      padding: 0 10px;
    }

    
      border:${({color}:IStyledDiv)=> `1px solid var(--${color})`};
    
    

  }
`;

export const StyledDivPassword = styled(StyledDiv)`
  & > div {
    position: relative;
    color: red;
  }

  .button-see-password {
    position: absolute;

    border: none;
    background: none;

    width: 16px;
    height: 16px;

    right: 5px;
    top: 50%;
    transform: translateY(-50%);
  }

  .button-see-password > svg {
    width: 100%;
    height: 100%;
  }
`;
