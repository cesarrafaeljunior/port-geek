import styled from "styled-components";

const StyledNotFound = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    min-height: 100vh;
  }
  div {
    position: fixed;
    z-index: 1;
    top: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    h1 {
      color: var(--color-primary);
      font-size: 80px;
      text-align: center;
      font-weight: 800;
      text-shadow: 4px 12px 12px var(--blur-effect-02);
    }
    a {
      background-color: var(--color-primary);
      color: black;
      font-weight: 700;
      border-radius: var(--radius-8);
      font-size: var(--font-subtitle-20);
      padding: 10px 12px;
      transition: 0.5s;
      border: 2px solid transparent;
      box-shadow: 4px 4px 12px var(--blur-effect-02);
      text-decoration: none;
    }
    a:hover {
      border: 2px solid white;
      scale: 1.1;
      box-shadow: 2px 12px 16px var(--blur-effect-02);
    }
    a:active {
      scale: 0.95;
    }
  }

  @media (min-width: 592px) {
    div {
      top: 35%;
    }
  }
`;

export default StyledNotFound;
