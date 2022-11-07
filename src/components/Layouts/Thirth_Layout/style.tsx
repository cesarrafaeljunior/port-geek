import styled from "styled-components";

export const ContainerThirthLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #efefef;
  header {
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2em;

    color: white;
    background-color: var(--backgroundHeader);

    .Container__UserIcon {
      margin-top: 50px;
    }

    .Container__UserInfos {
      width: 90%;
      max-width: 400px;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.625em;

      padding: 0.625em;
      border-radius: 0.625em;
      background-color: var(--borderUserIcon);
    }

    .Header__Infos__User {
      display: flex;
      flex-direction: column;
      gap: 0.438em;
      text-align: center;
    }
    .Adress__Infos {
      display: flex;
      gap: 4.375em;
    }

    .Section__Header {
      width: 100%;
      margin-top: 1.875em;

      section {
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.875em;

        padding-bottom: 1.875em;

        line-height: 1.9em;
        .Border--Bottom {
          border-bottom: solid 1px var(--borderUserIcon);
          width: max-content;
        }
      }

      .Division {
        width: 100%;
        height: 50px;
        margin-bottom: 1.875em;
        background-color: #efefef;
      }
    }
  }

  main {
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2em;

    .Section__Main {
      width: 90%;
      margin: 0 auto;

      section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.875em;

        padding-bottom: 1.875em;

        line-height: 1.9em;
      }

      h2 {
        width: max-content;
        padding: 10px;

        background-color: var(--borderUserIcon);
        color: white;
      }

      .Title__Formation {
        background-color: var(--backgroundHeader);
      }

      .Paragraph__Formation {
        padding: 15px;
        color: white;
        margin: 0 -16px 0 -16px;
        background-color: var(--borderUserIcon);
      }

      .Project__Title {
        background-color: var(--backgroundHeader);
      }
      .Container__Project {
        .Project__Flex--Box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2.5em;
        }
        .Buttons__Box {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
      }

      @media (min-width: 480px) {
        .Container__Project {
          .Project__Flex--Box {
            flex-direction: row;
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    .Container__UserIcon {
      align-self: flex-start;
      margin-left: 1.875em;
      z-index: 1;
    }
    .Container__UserInfos {
      position: absolute;
      top: 63px;
      left: 125px;
      z-index: 0;
      border: none;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    header {
      width: 40%;
      justify-content: flex-start;
    }
    .Container__UserIcon {
      align-self: center;
      img {
        width: 150px;
        height: 150px;
      }
    }
    .Container__UserInfos {
      left: 150px;
      top: 72px;
      min-width: 800px;
      justify-content: center;
      height: 100px;

      .Header__Infos__User {
        align-self: flex-start;
        margin-left: 6em;
      }
      .Adress__Infos {
        margin-left: 6em;
        position: absolute;

        top: 3.75em;
        right: 3.125em;
      }
    }

    .Container__Contacts {
      margin-top: 11.25em;

      li {
        min-width: 40%;
      }
    }

    .Section__Main {
      min-width: 100%;
      .Title__Experience {
        position: absolute;
        left: -55px;
        transform: rotate(-90deg);
        margin-top: 50px;
      }
      .Container__Formation {
        width: 100%;
        margin-top: 118px;
      }
    }
  }
`;
