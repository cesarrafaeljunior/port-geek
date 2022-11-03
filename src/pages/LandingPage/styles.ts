import styled from "styled-components";
import animatedLogo from "../../assets/img/teste.svg";
import descriptionImg from "../../assets/img/wallpaper08.jpg";
import AsideImg from "../../assets/img/wallpaper11.jpg";
import aboutImage from "../../assets/img/about-02.png";
import groupImage from "../../assets/img/wallpaper04.jpg";
import groupSection from "../../assets/img/wallpaper04.jpg";

/****************************************

    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: +55 (11) 9-7749-2121
    Name: Final Project
    Description: Landing Page Designs
    ~ *   LandingPage Styles   * ~

            Version: 1.0

****************************************/

export const HomeSection = styled.main`
  width: 100%;
  height: 110vh;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #c2e0f9;

  @media screen and (max-width: 480px) {
    height: 200vh;
    flex-flow: column nowrap;
  }
  @media screen and (max-width: 600px) {
    height: 200vh;
    flex-flow: column nowrap;
  }
  @media screen and (max-width: 768px) {
    height: 200vh;
    flex-flow: column nowrap;
  }
  @media screen and (max-width: 1024px) {
    height: 200vh;
    flex-flow: column nowrap;
  }
  @media screen and (max-width: 1200px) {
    height: 200vh;
    flex-flow: column nowrap;
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
  background-image: url(${descriptionImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 100px;

  & > h1 {
    font-size: var(--font-subtitle-28);
    font-family: var(--font-secondary-inter);
    font-weight: var(--font-weight-700);
    letter-spacing: 2px;
    line-height: var(--font-line-height-32);
    color: var(--color-grey-4);
    width: 60%;
    height: 20%;
    margin-bottom: 50px;
    text-shadow: 0 -1px 4px var(--color-white-mode),
      0 -2px 10px var(--color-quartenary),
      0 -10px 20px var(--color-shadow-box-01), 0 -18px 40px var(--color-primary);
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 100vh;
    justify-content: space-evenly;
    padding-top: 30px;

    & > h1 {
      width: 80%;
      height: 26%;
      margin: 0;
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100vh;
    justify-content: space-evenly;
    padding-top: 30px;

    & > h1 {
      width: 80%;
      height: 26%;
      margin: 0;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100vh;
    justify-content: space-evenly;
    padding-top: 30px;

    & > h1 {
      width: 80%;
      height: 26%;
      margin: 0;
    }
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 100vh;
    justify-content: space-evenly;
    padding-top: 30px;

    & > h1 {
      width: 80%;
      height: 26%;
      margin: 0;
    }
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 100vh;
    justify-content: space-evenly;
    padding-top: 30px;

    & > h1 {
      width: 80%;
      height: 26%;
      margin: 0;
    }
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
    font-family: var(--font-secondary-inter);
    font-weight: var(--font-weight-400);
    color: var(--color-grey-4);
  }

  b {
    text-decoration: underline;
    text-decoration-color: var(--color-feedback-info);
  }

  @media screen and (max-width: 480px) {
  }
  @media screen and (max-width: 600px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 1200px) {
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
  background-image: url(${AsideImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  & > h1 {
    margin-top: 100px;
    font-size: var(--font-subtitle-28);
    font-family: var(--font-secondary-inter);
    font-weight: var(--font-weight-600);
    color: var(--color-grey-4);
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 100vh;

    & > h1 {
      margin-top: 30px;
      width: 80%;
      text-align: center;
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100vh;

    & > h1 {
      margin-top: 30px;
      width: 80%;
      text-align: center;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100vh;

    & > h1 {
      margin-top: 30px;
      width: 80%;
      text-align: center;
    }
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 100vh;

    & > h1 {
      margin-top: 30px;
      width: 80%;
      text-align: center;
    }
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 100vh;

    & > h1 {
      margin-top: 30px;
      width: 80%;
      text-align: center;
    }
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const AnimatedLogo = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-image: url(${animatedLogo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  @media screen and (max-width: 480px) {
    width: 80%;
    height: 60%;
  }
  @media screen and (max-width: 600px) {
    width: 80%;
    height: 60%;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    height: 60%;
  }
  @media screen and (max-width: 1024px) {
    width: 80%;
    height: 60%;
  }
  @media screen and (max-width: 1200px) {
    width: 80%;
    height: 60%;
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const Border = styled.div`
  position: absolute;
  height: 80vh;
  top: 25%;
  left: 50%;
  bottom: 0;
  border-left: 2px solid var(--color-quinternary);

  @media screen and (max-width: 480px) {
    display: none;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
  @media screen and (max-width: 1200px) {
    display: none;
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const TransitionAbout = styled.button`
  position: absolute;
  top: 105vh;
  left: 47%;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;

  @media screen and (max-width: 480px) {
    top: 200vh;
    left: 37%;
  }
  @media screen and (max-width: 600px) {
    top: 200vh;
    left: 37%;
  }
  @media screen and (max-width: 768px) {
    top: 200vh;
    left: 37%;
  }
  @media screen and (max-width: 1024px) {
    top: 200vh;
    left: 37%;
  }
  @media screen and (max-width: 1200px) {
    top: 200vh;
    left: 37%;
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const ShowCase = styled.div`
  width: 80%;
  height: 50%;
  background-color: var(--blur-effect-02);
  border: 2px solid var(--color-quartenary);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    height: 40%;
  }
  @media screen and (max-width: 600px) {
    height: 40%;
  }
  @media screen and (max-width: 768px) {
    height: 40%;
  }
  @media screen and (max-width: 1024px) {
    height: 40%;
  }
  @media screen and (max-width: 1200px) {
    height: 40%;
  }
  @media screen and (max-width: 1920px) {
  }
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

  @media screen and (max-width: 480px) {
    width: 80%;
    height: 100px;

    & > form {
      flex-flow: column nowrap;
    }

    & > form > input {
      width: 100%;
      height: 45px;
    }

    & > form > button {
      width: 80%;
      height: 45px;
    }
  }
  @media screen and (max-width: 600px) {
    width: 80%;
    height: 100px;

    & > form {
      flex-flow: column nowrap;
    }

    & > form > input {
      width: 100%;
      height: 45px;
    }

    & > form > button {
      width: 80%;
      height: 45px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    height: 100px;

    & > form {
      flex-flow: column nowrap;
    }

    & > form > input {
      width: 100%;
      height: 45px;
    }

    & > form > button {
      width: 80%;
      height: 45px;
    }
  }
  @media screen and (max-width: 1024px) {
    width: 80%;
    height: 100px;

    & > form {
      flex-flow: column nowrap;
    }

    & > form > input {
      width: 100%;
      height: 45px;
    }

    & > form > button {
      width: 80%;
      height: 45px;
    }
  }
  @media screen and (max-width: 1200px) {
    width: 80%;
    height: 100px;

    & > form {
      flex-flow: column nowrap;
    }

    & > form > input {
      width: 100%;
      height: 45px;
    }

    & > form > button {
      width: 80%;
      height: 45px;
    }
  }
  @media screen and (max-width: 1920px) {
    width: 80%;
    height: 100px;

    & > form {
      flex-flow: column nowrap;
    }

    & > form > input {
      width: 100%;
      height: 45px;
    }

    & > form > button {
      width: 80%;
      height: 45px;
    }
  }
`;
/*------------------------- Skip line -------------------------*/

export const AboutSection = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  background-color: royalblue;

  @media screen and (max-width: 480px) {
    height: 200vh;
    width: 100%;
    flex-flow: column nowrap;
  }
  @media screen and (max-width: 600px) {
    height: 200vh;
    width: 100%;
    flex-flow: column nowrap;
  }
  @media screen and (max-width: 768px) {
    height: 200vh;
    width: 100%;
    flex-flow: column nowrap;
  }
  @media screen and (max-width: 1024px) {
    height: 200vh;
    width: 100%;
    flex-flow: column nowrap;
  }
  @media screen and (max-width: 1200px) {
    height: 200vh;
    width: 100%;
    flex-flow: column nowrap;
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const CompanionSection = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  background-image: url(${groupSection});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 100px;
  border-top: 2px solid var(--color-grey-4);

  & > h1 {
    font-size: var(--font-subtitle-28);
    font-family: var(--font-secondary-inter);
    font-weight: var(--font-weight-700);
    letter-spacing: 2px;
    line-height: var(--font-line-height-32);
    color: var(--color-grey-4);
    width: 50%;
    height: 5%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 100vh;
    padding-top: 30px;

    & > h1 {
      width: 80%;
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100vh;
    padding-top: 30px;

    & > h1 {
      width: 80%;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100vh;
    padding-top: 30px;

    & > h1 {
      width: 80%;
    }
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 100vh;
    padding-top: 30px;

    & > h1 {
      width: 80%;
    }
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 100vh;
    padding-top: 30px;

    & > h1 {
      width: 80%;
    }
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const AboutDescriptionSpace = styled.aside`
  width: 50%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--color-grey-0);
  background-image: url(${aboutImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-top: 2px solid var(--color-grey-4);

  & > h1 {
    margin-top: 100px;
    font-size: var(--font-subtitle-28);
    font-family: var(--font-secondary-inter);
    font-weight: var(--font-weight-600);
    color: var(--color-grey-4);
    letter-spacing: 2px;
  }

  & > p {
    margin-top: 100px;
    font-family: var(--font-secondary-inter);
    font-size: var(--font-subtitle-20);
    font-weight: var(--font-weight-400);
    line-height: var(--font-line-height-32);
    background-color: var(--blur-effect-02);
    color: var(--color-white-mode);
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 40%;
    padding: 0 5%;
    border: 2px solid var(--color-primary);
    border-radius: var(--radius-8);
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 100vh;

    & > p {
      width: 80%;
      height: 60%;
      font-size: var(--font-text-16);
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100vh;

    & > p {
      width: 80%;
      height: 60%;
      font-size: var(--font-text-16);
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100vh;

    & > p {
      width: 80%;
      height: 60%;
      font-size: var(--font-text-16);
    }
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 100vh;

    & > p {
      width: 80%;
      height: 60%;
      font-size: var(--font-text-16);
    }
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 100vh;

    & > p {
      width: 80%;
      height: 60%;
      font-size: var(--font-text-16);
    }
  }
  @media screen and (max-width: 1920px) {
    & > p {
      width: 70%;
    }
  }
`;

export const SecondBorder = styled.div`
  position: absolute;
  height: 80vh;
  top: 140%;
  left: 50%;
  bottom: 0;
  border-left: 2px solid var(--color-quinternary);

  @media screen and (max-width: 480px) {
    display: none;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
  @media screen and (max-width: 1200px) {
    display: none;
  }

  @media screen and (max-width: 1920px) {
  }
`;

export const TransitionHome = styled.button`
  position: absolute;
  top: 125vh;
  left: 47%;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;

  @media screen and (max-width: 480px) {
    top: 215vh;
    left: 37%;
  }
  @media screen and (max-width: 600px) {
    top: 215vh;
    left: 37%;
  }
  @media screen and (max-width: 768px) {
    top: 215vh;
    left: 37%;
  }
  @media screen and (max-width: 1024px) {
    top: 215vh;
    left: 37%;
  }
  @media screen and (max-width: 1200px) {
    top: 215vh;
    left: 37%;
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const GroupMemberSpace = styled.div`
  width: 80%;
  height: 90%;
  margin-top: 20px;
  background-image: url(${groupImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  border: 2px solid var(--color-grey-4);
  overflow: auto;

  @media screen and (max-width: 480px) {
    width: 90%;
  }
  @media screen and (max-width: 600px) {
    width: 90%;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
  @media screen and (max-width: 1200px) {
    width: 90%;
  }
  @media screen and (max-width: 1920px) {
  }
`;
export const MemberCard = styled.div`
  width: 90%;
  height: 90px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--blur-effect-01);
  border: 2px solid var(--color-quartenary);
  border-radius: var(--radius-8);
`;

export const MemberCardImg = styled.a`
  width: 15%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 2%;

  & > img {
    width: 90%;
    height: 90%;
    border-radius: var(--radius-half);
    border: 2px solid var(--color-grey-4);
  }

  @media screen and (max-width: 480px) {
    width: 30%;
    transform: scale(0.7);
  }
  @media screen and (max-width: 600px) {
    width: 20px;
    transform: scale(0.8);
    background-color: red;
  }
  @media screen and (max-width: 768px) {
    width: 20px;
    transform: scale(0.9);
  }
  @media screen and (max-width: 1024px) {
    width: 20px;
    transform: scale(0.7);
  }
  @media screen and (max-width: 1200px) {
    width: 100px;
    transform: scale(0.9);
  }
  @media screen and (max-width: 1920px) {
  }
`;
export const MemberCardInfo = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: flex-start;

  & > h1 {
    font-size: var(--font-subtitle-20);
    font-family: var(--font-secondary-inter);
    font-weight: var(--font-weight-600);
    color: var(--color-grey-4);
  }
  & > h2 {
    font-size: var(--font-text-16);
    font-family: var(--font-secondary-inter);
    font-weight: var(--font-weight-400);
    color: var(--color-grey-0);
  }

  @media screen and (max-width: 480px) {
    & > h1 {
      font-size: var(--font-text-16);
    }

    & > h2 {
      font-size: var(--font-text-14);
    }
  }
  @media screen and (max-width: 600px) {
    & > h1 {
      font-size: var(--font-text-16);
    }

    & > h2 {
      font-size: var(--font-text-14);
    }
  }
  @media screen and (max-width: 768px) {
    & > h1 {
      font-size: var(--font-text-16);
    }

    & > h2 {
      font-size: var(--font-text-14);
    }
  }
  @media screen and (max-width: 1024px) {
    & > h1 {
      font-size: var(--font-text-16);
    }

    & > h2 {
      font-size: var(--font-text-14);
    }
  }
  @media screen and (max-width: 1200px) {
    & > h1 {
      font-size: var(--font-text-16);
    }

    & > h2 {
      font-size: var(--font-text-14);
    }
  }
  @media screen and (max-width: 1920px) {
  }
`;
