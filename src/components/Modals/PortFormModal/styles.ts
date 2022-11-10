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
  z-index: 1;
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
    gap: 16px;
    max-width: 450px;
    animation: openFromTop 0.5s ease;

    h2 {
      margin-top: 12px;
      text-align: center;
      font-weight: var(--font-weight-700);
      font-size: var(--font-subtitle-20);
    }
    .formInput {
      position: relative;

      span {
        position: absolute;
        top: -8px;
        left: 14px;
        background-color: white;
        padding: 2px 4px;
        border-radius: var(--radius-4);
        color: var(--color-feedback-negative);
        font-size: var(--font-text-12);
        font-weight: var(--font-weight-700);
      }
      .label {
        color: black;
      }
    }

    input[type="number"] {
      -webkit-appearance: textfield;
      -moz-appearance: textfield;
      appearance: textfield;
    }
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
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
      transition: 0.3s;
      outline: none;
    }
    input:focus,
    select:focus,
    textarea:focus {
      border: 2px solid var(--color-primary);
    }
    .invalid {
      border: 2px solid var(--color-feedback-negative);
    }
    .invalid:focus {
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
    button:hover {
      scale: 1.1;
    }
    button:active {
      scale: 0.95;
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
      scale: 1.3;
    }
    .button-close:active {
      scale: 0.95;
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
      .button-default.confirm:hover {
        background-color: var(--color-feedback-success);
      }
    }

    .flex {
      display: flex;
      flex-direction: column;
      gap: 12px;
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
            box-shadow: 2px 4px 12px var(--blur-effect-02);
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
      .flex {
        flex-direction: row;

        div {
          position: relative;
          width: 100%;
          select {
            position: absolute;
          }
        }
      }
    }
  }

  @keyframes openFromTop {
    from {
      transform: translateY(-80px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;

export default PortFormModalStyled;
