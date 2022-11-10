import styled from "styled-components";
import IconBrazil from "../../assets/icons/iconBrazil.png";
import IconUSA from "../../assets/icons/iconUSA.png";

/****************************************

    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: +55 (11) 9-7749-2121
    Name: Portifólio Design
    Description: Using styled-components to improve main Page.
    ~ *   The Page Styles   * ~

            Version: 1.0

****************************************/
interface ShowProps {
  show: boolean;
}
export const Header = styled.header`
  width: 100%;
  height: 120px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding-left: 100px;
  background-color: var(--color-primary);
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
  width: 200px;
  height: 50%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--color-navigation);
  border: 1px solid var(--color-quartenary);
  transform: ${({ show }) => (show ? "translateX(-100%)" : "translateX(0%)")};
  transition: 0.8s ease-in-out;
  z-index: 1001;
  position: fixed;
  top: 15%;
  left: 100%;

  & > a {
    text-decoration: none;
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    width: 500px;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    background-color: transparent;
    border: none;
    transform: none;
    transition: none;
    z-index: 1001;
    position: relative;
    top: 0%;
    left: -10%;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
  }
`;

export const Links = styled.button`
  width: 120px;
  height: 40px;
  background-color: var(--color-grey-3);
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: 1px solid var(--color-grey-3);
  color: var(--color-white-mode);
  font-family: var(--font-primary-nunito);
  font-weight: var(--font-weight-600);
  border-radius: var(--radius-8);

  &:focus {
    background-color: var(--color-grey-2);
    color: var(--color-white-mode);
    border: 1px solid var(--color-white-mode);
    border-radius: var(--radius-8);
  }

  &:hover {
    background-color: var(--color-grey-2);
    border: 1px solid var(--color-grey-3);
  }
`;
export const BrazilButton = styled.button`
  width: 50px;
  height: 50px;

  background-image: url(${IconBrazil});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  text-decoration: none;

  border: none;

  border-radius: 50%;

  background-color: var(--color-grey-3);

  &:hover,
  &:focus {
    opacity: 0.4;
    background-color: var(--color-grey-3);
  }
`;
export const UsaButton = styled.button`
  width: 50px;
  height: 50px;

  background-image: url(${IconUSA});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  text-decoration: none;

  border-radius: 50%;

  background-color: var(--color-grey-3);

  &:hover,
  &:focus {
    opacity: 0.4;
    background-color: var(--color-grey-3);
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
  @media screen and (min-width: 1024px) {
    display: none;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;
