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
    margin: 50px 0;
    overflow-y: scroll;
    width: 90%;
    max-height: 100vh;
    background-color: white;
    padding: 24px 32px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 450px;

    h2 {
      text-align: center;
      font-weight: var(--font-weight-700);
      font-size: var(--font-subtitle-20);
    }

    input,
    select,
    textarea {
      border: 0;
      box-sizing: border-box;
      outline: none;
      /* REMOVER */
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
      }
    }

    .layouts {
      display: flex;
      overflow-x: scroll;
      min-height: 380px;
      gap: 18px;
      .layoutContent {
        display: flex;
        flex-direction: column;
        padding: 12px;

        label {
          display: flex;
          flex-direction: column;
          gap: 20px;

          img {
            width: 200px;
            height: 300px;
            box-shadow: 2px 4px 12px black;
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
`;

export default PortFormModalStyled;
