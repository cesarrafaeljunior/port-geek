import styled from "styled-components";

interface IStyledDiv {
  bordercolor?: string;
}

export const StyledDiv = styled.div<IStyledDiv>`
  display: flex;
  flex-direction: column;
  gap: var(--gap-8);

  max-width: 100px;

  & input {
    box-sizing: border-box;

    width: 100%;

    padding: var(--padding-8);
    padding-right: var(--padding-24);

    background-color: var(--color-grey-0);
    color: var(--color-grey-3);

    border: ${(props) =>
        props.bordercolor ? props.bordercolor : "var(--border-size-2)"}
      solid transparent;
    border-radius: var(--radius-6);
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
