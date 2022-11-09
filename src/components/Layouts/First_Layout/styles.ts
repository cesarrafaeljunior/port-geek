import styled from "styled-components";

export const ContainerFirstLayout = styled.div`
  display: flex;
  .Modal {
    .IconClose {
      & > svg {
        color: black;
      }
    }
  }
`;

interface IHeader {
  seeInfo: boolean;
}

export const HeaderFirstLayout = styled.header<IHeader>`
  position: fixed;
  z-index: 1;
  top: 0;
  left: ${(props) => (props.seeInfo ? "0" : "-265px")};

  width: 290px;
  min-height: 100vh;

  transition: 1s ease;

  background-color: #0f3267;
  color: white;

  .Container__UserIcon > figure {
    padding: 16px 0;

    & > img {
      display: block;
      margin: 0 auto;
    }
  }

  .Container__UserInfos {
    & p,
    & h1 {
      margin: 0.6em 0.2em;
    }
  }

  .Container__Contacts {
    padding: 0.5em 0.5em;

    flex-direction: column;

    border-top: 2px solid var(--color-grey-0);
    border-bottom: 2px solid var(--color-grey-0);

    & > li {
      width: 90%;
    }
  }

  .Header__Infos__User {
    border-bottom: 2px solid var(--color-grey-0);
  }

  .div-infos {
    width: 250px;
  }

  .show-user-infos {
    position: absolute;

    top: 50%;
    transform: translateY(-50%);
    right: 4px;

    width: 20px;
    height: 100%;
    font-size: 1.5em;

    background: none;
    border: none;
    color: white;

    padding: 0;
  }

  .Modal {
    background-color: white;
    color: red;
  }

  @media (min-width: 800px) {
    & {
      position: sticky;

      left: 0;

      width: 25%;
      min-width: 260px;
    }

    .div-infos {
      width: unset;
    }

    .show-user-infos {
      display: none;
    }
  }
`;

export const BodyFirstLayout = styled.main`
  background-color: #b6d1fa;

  min-height: 100vh;
  width: 100%;

  & > section {
    width: 95%;
    margin: 0 auto;

    & > h2 {
      padding: 16px 0;
    }

    & > p {
      background-color: white;

      padding: 8px;

      overflow-wrap: break-word;
    }
  }

  .user-project {
    .project-infos {
      min-height: 12rem;

      display: flex;
    }

    .project-image {
      width: 20%;
    }
  }

  .Project__Flex--Box {
    display: flex;
    align-items: center;
  }

  .Buttons__Box {
    display: flex;
    flex-direction: column;

    margin-left: 1rem;

    & > button,
    & > a {
      width: 200px;
      height: 50px;
      margin: 1em 0;

      width: 100%;
    }
  }

  @media (max-width: 590px) {
    .Project__Flex--Box {
      flex-direction: column;
    }
  }

  @media (max-width: 800px) {
    & {
      padding-left: 40px;
    }
  }
`;
