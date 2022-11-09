import styled from "styled-components";

export interface IContainerModal {
  bgColor: string;
  color: string;
  borderColor: string;
}

export const ContainerModalDescription = styled.div<IContainerModal>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;

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
    padding: 35px 20px 20px 20px;
    background-color: ${({ bgColor }) => `var(${bgColor})`};
    color: ${({ color }) => `var(${color})`};
    border: ${({ borderColor }) => `1px solid var(${borderColor})`};

    line-height: 1.875em;

    .IconClose {
      position: absolute;
      top: 5px;
      right: 0px;
      cursor: pointer;

      border: none;
      background: none;

      opacity: 0.7;

      transition: 1s ease;

      &:hover {
        opacity: 1;
        filter: brightness(0.8);
        transform: scale(1.2);
      }

      & > svg {
        width: 30px;
        height: 30px;
        color: white;
      }
    }
    h2 {
      font-size: 22px;
      font-weight: bold;
      text-decoration: underline;
    }
  }
`;
