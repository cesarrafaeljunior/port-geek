import styled from "styled-components";
import animatedLogo from "../../assets/img/teste.svg";

/****************************************

    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: +55 (11) 9-7749-2121
    Name: Portifólio Design
    Description: Using styled-components to improve main Page.
    ~ *   The Page Styles   * ~

            Version: 1.0

****************************************/

export const HomeSection = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #c2e0f9;

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const DescriptionSection = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--color-grey-1);
  padding-top: 100px;

  & > h1 {
    font-size: var(--font-subtitle-28);
    font-family: var(--font-secondary-inter);
    font-weight: var(--font-weight-700);
    letter-spacing: 2px;
    line-height: var(--font-line-height-32);
    color: var(--color-grey-4);
    width: 50%;
    height: 30%;
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const TypingEffect = styled.div`
  height: 100px;
  width: 90%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: var(--font-subtitle-24);
    color: var(--color-grey-4);
  }

  b {
    text-decoration: underline;
    text-decoration-color: var(--color-feedback-info);
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const AsideSpace = styled.aside`
  width: 50%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: #c2e0f9;

  & > h1 {
    margin-top: 100px;
    font-size: var(--font-subtitle-28);
    color: var(--color-grey-4);
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const AnimatedLogo = styled.div`
  width: 50%;
  height: 70%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-image: url(${animatedLogo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const Border = styled.div`
  position: absolute;
  height: 80vh;
  top: 25%;
  left: 50%;
  bottom: 0;
  border-left: 2px solid var(--color-quinternary);
`;

export const BtnDiv = styled.div`
  width: 50%;
  height: 100px;

  & > form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }

  & > form > input {
    width: 68%;
    height: 40px;
    border: 1px solid var(--color-secondary);
    border-radius: var(--radius-8);
    padding-left: 20px;
    background-color: var(--color-grey-1);
  }

  & > form > button {
    width: 28%;
    height: 40px;
    border: 1px solid var(--color-secondary);
    background-color: var(--color-grey-3);
    color: var(--color-white-mode);
    border-radius: var(--radius-8);
  }
`;
/*------------------------- Skip line -------------------------*/
