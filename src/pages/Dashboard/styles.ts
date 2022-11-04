import styled from "styled-components";
import { Link } from "react-router-dom";
import backGroundBtn from "../../assets/img/backgroundBtn.png";
import {
  FcEditImage,
  FcEmptyTrash,
  FcFullTrash,
  FcShare,
} from "react-icons/fc";

export const IconTrash = styled(FcEmptyTrash)`
  width: 1.823rem;
  height: 1.75rem;
  cursor: pointer;

  :hover {
    margin-top: -10px;

    transition: all 0.2s ease-in-out;
  }
`;

export const IconEdit = styled(FcEditImage)`
  width: 1.823rem;
  height: 1.75rem;
  cursor: pointer;

  :hover {
    margin-top: -10px;

    transition: all 0.2s ease-in-out;
  }
`;

export const IconShare = styled(FcShare)`
  width: 1.823rem;
  height: 1.75rem;
  cursor: pointer;

  :hover {
    margin-top: -10px;

    transition: all 0.2s ease-in-out;
  }
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: var(--color-grey-3);

  :hover {
    color: var(--color-grey-2);
  }
`;

export const Container = styled.div`
  min-width: 100%;
  min-height: 100vh;
  font-family: var(--font-secondary-inter);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  background-color: var(--color-grey-1);

  header {
    display: flex;
    justify-content: center;
    gap: 60rem;
    position: fixed;
    height: 6rem;
    z-index: 1;

    @media (max-width: 768px) {
      height: 8rem;
      align-items: center;
    }

    .div-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      @media (max-width: 768px) {
        flex-direction: column;
        justify-content: unset;
      }
    }

    background-color: var(--color-primary);
    width: 100%;
    .logo {
      margin-left: 10rem;
      @media (max-width: 768px) {
        margin-left: 0;
      }
    }
    .container-user {
      display: flex;
      align-items: center;
      gap: 40px;
      margin-right: 5rem;
      @media (max-width: 768px) {
        margin-right: 0;
      }

      span {
        color: var(--color-grey-3);
        font-weight: var(--font-weight-600);
      }
    }
  }

  .container-secondary {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    max-width: 100%;
    padding: 10px;
    gap: 10rem;
    margin-top: 10rem;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin-top: 8rem;
    }

    .div-alert {
      display: flex;
      align-items: center;
      @media (max-width: 768px) {
        margin-top: 10rem;
      }

      p {
        text-align: center;
        font-size: var(--font-subtitle-24);
        font-weight: var(--font-weight-700);

        @media (max-width: 768px) {
          font-size: var(--font-subtitle-20);
        }
      }
    }

    .portfolio {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      padding: 10px;
      width: 600px;
      height: 60%;
      background-color: var(--color-grey-2);

      @media (max-width: 768px) {
        width: 90%;
      }

      .mini-port {
        width: 90%;
        height: auto;
        margin-top: 1rem;
      }

      .buttons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 80%;
      }
    }

    .container-final {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      /* width: 100%; */
      margin-bottom: 6rem;
      /* background-image: url(${backGroundBtn});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain; */
      @media (max-width: 768px) {
        width: 90%;
      }
      .background-btn {
        width: 500px;
        /* max-width: 100%; */
        @media (max-width: 907px) {
          width: 400px;
        }
        @media (max-width: 768px) {
          display: none;
        }
      }
    }
  }
`;

export const ButtonNewLayout = styled.button`
  width: 140px;

  height: 40px;
  position: absolute;
  bottom: 32%;
  margin-left: 4rem;
  border: transparent;
  border-radius: var(--radius-8);

  background-color: var(--color-grey-3);
  color: var(--color-grey-0);

  font-weight: var(--font-weight-600);

  :hover {
    background-color: var(--color-grey-2);
  }

  @media (max-width: 768px) {
    top: 0;
    margin-left: 0;
  }
`;
