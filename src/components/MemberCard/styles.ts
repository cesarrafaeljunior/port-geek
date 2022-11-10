import styled from "styled-components";

export const MemberCard = styled.div`
  width: 90%;
  height: 90px;

  margin-top: 20px;
  padding: 1em;

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
    width: 60px;
    height: 60px;

    border-radius: var(--radius-half);

    border: 2px solid var(--color-grey-3);

    object-fit: cover;
  }

  @media screen and (max-width: 480px) {
    width: 30%;
    transform: scale(0.7);
  }
  @media screen and (max-width: 600px) {
    width: 20px;
    transform: scale(0.8);
  }
  @media screen and (max-width: 768px) {
    transform: scale(0.9);
  }
  @media screen and (max-width: 1024px) {
    transform: scale(0.7);
  }
  @media screen and (max-width: 1200px) {
    width: 100px;
    transform: scale(0.9);
  } 
`;

export const MemberCardInfo = styled.div`
  width: 70%;
  height: 100%;

  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: flex-start;

  & > h3 {
    font-size: var(--font-text-16);
    font-family: var(--font-secondary-inter);
    font-weight: var(--font-weight-600);

    color: var(--color-grey-0);

    margin-bottom: 0.5em;
  }
  & > h4 {
    font-size: var(--font-text-14);
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
`;
