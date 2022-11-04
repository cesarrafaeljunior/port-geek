import styled from "styled-components";
import { ShowProps } from "./Header";

/****************************************

    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: +55 (11) 9-7749-2121
    Name: Portifólio Design
    Description: Using styled-components to improve main Page.
    ~ *   The Page Styles   * ~

            Version: 1.0

****************************************/

export const Header = styled.header`
  width: 100%;
  height: 120px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding-left: 100px;
  background-color: var(--color-secondary);
  border-bottom: 2px solid var(--color-black-mode);
  z-index: 1001;
  position: fixed;
  top: 0;
  left: 0;

  @media screen and (max-width: 480px) {
    padding-left: 0;
  }
  @media screen and (max-width: 600px) {
    padding-left: 0;
  }
  @media screen and (max-width: 768px) {
    padding-left: 0;
  }
  @media screen and (max-width: 1024px) {
    padding-left: 0;
  }
  @media screen and (max-width: 1200px) {
    padding-left: 0;
  }
  @media screen and (max-width: 1920px) {
    justify-content: space-between;
    width: 100%;
  }
`;

export const ImageSpace = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 90%;
    height: 90%;
    transform: scale(0.7);
  }
`;

export const LinkSpace = styled.div<ShowProps>`
  width: 400px;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-right: 100px;
  transform: ${({ show }) => (show ? "translateX(-100%)" : "translateX(0%)")};

  & > a {
    text-decoration: none;
  }

  @media screen and (max-width: 480px) {
    padding-right: 0;
    width: 200px;
    height: 50%;
    background-color: var(--color-navigation);
    border: 1px solid var(--color-quartenary);
    position: fixed;
    top: 15%;
    left: 0%;
    flex-flow: column nowrap;
    z-index: 1001;

    & > button {
      color: var(--color-white-mode);
    }

    & > a > button {
      color: var(--color-white-mode);
    }
  }
  @media screen and (max-width: 600px) {
    padding-right: 0;
    width: 200px;
    height: 50%;
    background-color: var(--color-navigation);
    border: 1px solid var(--color-quartenary);
    position: fixed;
    top: 5%;
    left: 0%;
    flex-flow: column nowrap;
    z-index: 1001;

    & > button {
      color: var(--color-white-mode);
    }

    & > a > button {
      color: var(--color-white-mode);
    }
  }
  @media screen and (max-width: 768px) {
    padding-right: 0;
    width: 200px;
    height: 50%;
    background-color: var(--color-navigation);
    border: 1px solid var(--color-quartenary);
    position: fixed;
    top: 5%;
    left: 0%;
    flex-flow: column nowrap;
    z-index: 1001;

    & > button {
      color: var(--color-white-mode);
    }

    & > a > button {
      color: var(--color-white-mode);
    }
  }
  @media screen and (max-width: 1024px) {
    padding-right: 0;
    width: 200px;
    height: 50%;
    background-color: var(--color-navigation);
    border: 1px solid var(--color-quartenary);
    position: fixed;
    top: 5%;
    left: 0%;
    flex-flow: column nowrap;
    z-index: 1001;

    & > button {
      color: var(--color-white-mode);
    }

    & > a > button {
      color: var(--color-white-mode);
    }
  }
  @media screen and (max-width: 1200px) {
    padding-right: 0;
    width: 200px;
    height: 50%;
    background-color: var(--color-navigation);
    border: 1px solid var(--color-quartenary);
    border-radius: 0 0 0 var(--radius-8);
    position: fixed;
    top: 118px;
    left: 100%;
    flex-flow: column nowrap;
    z-index: 1001;
    transition: 0.8s ease-in-out;

    & > button {
      color: var(--color-white-mode);
    }

    & > a > button {
      color: var(--color-white-mode);
    }
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const Links = styled.button`
  width: 120px;
  height: 40px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: none;
  text-decoration: none;
  color: var(--color-black-mode);
  font-family: var(--font-primary-nunito);
  font-size: var(--font-subtitle-20);
  font-weight: var(--font-weight-600);

  &:hover {
    background-color: var(--color-grey-3);
    border-radius: var(--radius-8);
    color: var(--color-white-mode);
  }
`;
/*------------------------- Skip line -------------------------*/

export const NavBarMenuBtn = styled.button`
  width: 50px;
  height: 40px;
  position: fixed;
  top: 5%;
  left: 85%;
  background-color: var(--color-grey-2);
  border-radius: var(--radius-8);
  z-index: 1001;

  & > svg {
    transform: scale(1.5);
  }

  @media screen and (min-width: 480px) {
    display: block;
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
    display: none;
  }
  @media screen and (max-width: 1920px) {
  }
`;
