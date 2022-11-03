import styled from "styled-components";
import { Link } from "react-router-dom";
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
    align-items: center;
    justify-content: space-evenly;
    gap: 60rem;
    position: fixed;
    height: 90px;

    background-color: var(--color-primary);
    width: 100%;
    max-width: 100%;
    .logo {
      margin-left: 10rem;
    }
    .container-user {
      display: flex;
      align-items: center;
      gap: 40px;
      background-color: red;

      span {
        color: var(--color-grey-3);
        font-weight: var(--font-weight-600);
      }
    }
  }

  .container-secondary {
    display: flex;
    justify-content: space-between;
    width: 70%;
    gap: 10rem;
    margin-top: 10rem;

    .portfolio {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      padding: 10px;
      width: 50%;
      background-color: var(--color-grey-2);

      .mini-port {
        width: 80%;
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
      width: 50%;

      .background-btn {
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 0;
      }
    }
  }
`;

export const ButtonNewLayout = styled.button`
  width: 140px;
  height: 40px;
  z-index: 1;

  margin-left: 4rem;
  margin-top: 2rem;

  border: transparent;
  border-radius: var(--radius-8);

  background-color: var(--color-grey-3);
  color: var(--color-grey-0);

  font-weight: var(--font-weight-600);

  :hover {
    background-color: var(--color-grey-2);
  }
`;
