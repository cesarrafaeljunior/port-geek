import styled from "styled-components";

export interface iModalDescription {
  bgColor: string;
  color: string;
  borderColor: string;
}

export const ContainerModalDescription = styled.div<iModalDescription>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  background-color: var(--color-grey-opacity);
  .Modal {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    width: 90%;
    max-width: 400px;

    border-radius: 10px;
    padding: 50px 20px 20px 20px;
    background-color: ${({ bgColor }) => `var(${bgColor})`};
    color: ${({ color }) => `var(${color})`};
    border: ${({ borderColor }) => `1px solid var(${borderColor})`};

    line-height: 1.875em;
    .IconClose {
      position: absolute;
      width: 30px;
      height: 30px;
      top: 10px;
      right: 20px;
      cursor: pointer;
    }
    h2 {
      font-size: 22px;
      font-weight: bold;
      text-decoration: underline;
    }
  }
`;
