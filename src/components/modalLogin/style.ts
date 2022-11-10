import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  position: fixed;
  background-color: rgba(18, 18, 20, 0.5);
  top: 0;
  left: 0;
  z-index: 1002;
`;

export const Contem = styled.div`
  width: 40rem;
  height: 26rem;
  background-color: var(--color-white-mode);
  border-radius: 4px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--grey-2);
  padding: 0.875rem 1.25rem;
  height: 40px;
  svg {
    font-size: 18px;
    color: var(--grey-1);
    cursor: pointer;
  }

  & > h1 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-20);
    color: var(--color-black-mode);
    font-weight: var(--font-weight-700);
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
`;

export const Main = styled.main`
  width: 100%;
  padding: 1.375rem 1.375rem 2rem 1.375rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  label > .error {
    color: var(--color-secondary);
  }

  & > p {
    color: var(--color-secondary);
    font-family: var(--font-primary-nunito);
    font-weight: var(--font-weight-600);
    font-size: var(--font-text-16);
  }
  .button-wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 15px 0px;
  }
  .button-wrapper > button {
    width: 100%;
  }
  .disabled-input {
    pointer-events: none;
    filter: brightness(0.75);
  }
  @media screen and (min-width: 425px) {
    .button-wrapper > button {
      width: max-content;
    }
    .button-wrapper > button:last-child {
      width: 40%;
    }
  }
`;
