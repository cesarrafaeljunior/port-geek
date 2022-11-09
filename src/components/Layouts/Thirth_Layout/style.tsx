import styled from "styled-components";

export const ContainerThirthLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background-color: var(--titleLayout);
  header {
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2em;

    color: white;
    background-color: var(--colorPrimaryL3);

    width: 90%;
    margin: 0 auto;
    
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
      background-color: var(--colorSecundaryL3);
    }

    .Header__Infos__User {
      display: flex;
      flex-direction: column;
      gap: 0.438em;
      text-align: center;
    }
    .Adress__Infos {
      width: 90%;
      display: flex;
      flex-direction: column;
      gap: 2.5em;
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
          border-bottom: solid 1px var(--colorSecundaryL3);
          width: max-content;
        }
        p {
          min-height: 16.313em;
        }
      }

      .Division {
        width: 100%;
        height: 50px;
        margin-bottom: 1.875em;
        background-color: var(--titleLayout);
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
        @media (min-width: 1024px) {
          gap: 0;
        }
      }

      h2 {
        width: max-content;
        padding: 10px;

        background-color: var(--colorSecundaryL3);
        color: white;
      }

      .Title__Formation {
        background-color: var(--colorPrimaryL3);
      }

      .Paragraph__Formation {
        min-width: 100%;
        text-align: center;
        padding: 15px;
        color: white;
        background-color: var(--colorSecundaryL3);
      }

      .Project__Title {
        background-color: var(--colorPrimaryL3);
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

      @media (min-width: 768px) {
        .Container__Project {
          .Project__Flex--Box {
            flex-direction: row;
          }
        }
        a {
          width: 12.5em;
          height: 50px;
        }
        button {
          width: 12.5em;
          height: 50px;
        }
      }
    }
  }
  .Container__Contacts {
    flex-direction: column;
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
      .Adress__Infos {
        flex-direction: row;
      }
    }
    .Container__Contacts {
      flex-direction: row;
    }
    .Header__Infos__User {
      margin-left: 2em;
    }
    .Adress__Infos {
      margin-left: 2em;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    header {
      justify-content: flex-start;

      max-width: 30%;
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
        text-align: inherit;
      }
      .Adress__Infos {
        margin-left: 6em;
        position: absolute;

        top: 3.75em;
        left: 13em;
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
      section {
        min-height: 170px;
      }

      .Title__Experience {
        position: absolute;
        top: 18em;
        left: -90px;
        transform: rotate(-90deg);

        width: 230px;
        text-align: center;
      }
      .Paragraph__Experience {
        text-align: center;
        max-width: 500px;
      }

      .Container__Formation {
        width: 100%;
        margin-top: 85px;

        .Title__Formation {
          width: 230px;
          text-align: center;
        }
        .Paragraph__Formation {
          min-width: 100%;
        }
      }
      .Container__Project {
        margin-top: -20px;
        gap: 25px;
        .ProjectImage__Box {
          figure {
            width: 200px;
            height: 200px;

            img {
              width: 100%;
              height: 100%;
              object-fit: fill;
            }
          }
        }
        button {
          &:hover {
            background-color: white;
            color: var(--colorPrimaryL3);
            border: solid 1px var(--colorPrimaryL3);
          }
        }
        a {
          padding: 0;
          &:hover {
            background-color: white;
            color: var(--colorPrimaryL3);
            border: solid 1px var(--colorPrimaryL3);
          }
        }
      }
    }
  }
`;
