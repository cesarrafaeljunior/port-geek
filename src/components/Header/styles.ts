import { Link } from "react-router-dom";
import styled from "styled-components";

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
  box-shadow: 0px 10px 10px 3px #fce79a;
  z-index: 1001;

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

export const LinkSpace = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-right: 100px;
`;

export const Links = styled(Link)`
  width: 120px;
  height: 40px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
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
