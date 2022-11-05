import styled from "styled-components";

const PortFormModalStyled = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  background-color: var(--blur-effect-02);
  display: flex;
  justify-content: center;

  * {
    font-family: var(--font-secondary-inter);
  }

  form {
    position: relative;
    margin: 50px 0;
    overflow-y: scroll;
    width: 90%;
    max-height: 100vh;
    background-color: white;
    padding: 24px 24px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 450px;
    animation: openFromTop 0.5s ease-in;

    h2 {
      margin-top: 12px;
      text-align: center;
      font-weight: var(--font-weight-700);
      font-size: var(--font-subtitle-20);
    }

    input,
    select,
    textarea {
      width: 100%;
      padding: 12px 10px;
      background-color: #eaeaea;
      border-radius: 8px;
      font-size: var(--font-text-16);
      border: 2px solid transparent;
    }
    input:focus,
    select:focus,
    textarea:focus {
      border: 2px solid var(--color-primary);
    }

    input:invalid,
    select:invalid,
    textarea:invalid {
      border: 2px solid var(--color-feedback-negative);
    }

    input::placeholder,
    textarea::placeholder {
      color: #b6b6b6;
    }

    textarea {
      resize: none;
      height: 150px;
    }
    button {
      transition: 0.3s;
    }
    button:active {
      scale: 0.9;
    }
    .button-close {
      position: absolute;
      top: 10px;
      right: 5px;
      font-size: 32px;
      font-weight: 600;
      background-color: transparent;
      transition: 0.5s;
    }
    .button-close:hover {
      color: var(--color-primary);
    }

    .formButtons {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      gap: 12px;
      .button-default {
        padding: 10px;
        color: white;
        font-size: var(--font-text-14);
        font-weight: var(--font-weight-600);
        border-radius: var(--radius-10);
        background-color: black;
      }
      .button-default:hover {
        color: black;
        background-color: var(--color-primary);
      }
    }

    .flex {
      /* PENSAR MELHOR SOBRE */
      display: flex;
      gap: 8px;
      div {
        position: relative;
        width: 100%;
        select {
          position: absolute;
        }
      }
    }
    .formLayouts {
      p {
        text-align: center;
        font-size: var(--font-text-16);
        font-weight: var(--font-weight-600);
        margin-bottom: 8px;
      }
    }
    .layouts {
      display: flex;
      overflow-x: scroll;
      min-height: 380px;
      gap: 18px;
      position: relative;
      .layoutContent {
        display: flex;
        flex-direction: column;
        padding: 12px;

        label {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          cursor: pointer;

          img {
            width: 200px;
            height: 300px;
            box-shadow: 2px 4px 12px black;
            transition: 0.5s;
          }
          img:active {
            scale: 0.95;
          }
          input {
            cursor: pointer;
            width: 16px;
            height: 16px;
          }
        }
      }
    }

    *::-webkit-scrollbar,
    ::-webkit-scrollbar {
      width: 8px;
    }
    *::-webkit-scrollbar-track,
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 0px 8px 8px 0;
    }
    *::-webkit-scrollbar-thumb,
    ::-webkit-scrollbar-thumb {
      background: #ffcf5c;
      border-radius: 8px;
    }
    *::-webkit-scrollbar-thumb:hover,
    ::-webkit-scrollbar-thumb:hover {
      background: #b6b6b6;
    }
  }

  @media (min-width: 768px) {
    form {
      padding: 24px 32px;
    }
  }

  @keyframes openFromTop {
    from {
      transform: translateY(-50px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;

export default PortFormModalStyled;
