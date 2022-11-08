import styled from "styled-components";

export const ContainerSecondLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background-color: #efefef;
  header {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    .Section__User__Header {
      width: 100%;
      border: solid 1px #393939;
      .Container__UserIcon {
        display: flex;
        justify-content: center;
        width: 100%;
      }
      img {
        width: calc(100% + 5%);
        height: 100%;
        border-radius: 0;
      }
    }
    .Section__Infos__Header {
      position: relative;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #393939;
      color: white;
      font-weight: 500;
      .Container__UserInfos {
        display: flex;
        flex-direction: column;
        gap: 1.875em;
        .Header__Infos__User {
          display: flex;
          flex-direction: column;
          gap: 0.5em;

          margin-top: 1.25em;
        }
        .Adress__Infos {
          display: flex;
          flex-direction: column;
          gap: 1.875em;
          align-self: flex-end;
        }
      }
    }
    @media (min-width: 768px) {
      flex-direction: row;
      .Section__User__Header {
        width: 40%;
        align-self: flex-start;
        .Container__UserIcon {
          height: 224px;
        }
      }
      .Section__Infos__Header {
        .Container__UserInfos {
          gap: 0;
          margin-left: 1.5em;
          align-self: flex-start;
          .Adress__Infos {
            position: absolute;
            top: 20px;
            right: 20px;
          }
        }
        .Container__Contacts {
          justify-content: flex-start;
        }
      }
    }
  }
  main {
    margin-top: 1.875em;
    .Section__Main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.25em;
      figure {
        margin: 0 auto;
        margin-bottom: 10px;
        width: 78px;
        height: 78px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      h2 {
        text-align: center;
        margin-bottom: 20px;
      }
      p {
        line-height: 1.9em;
        border-bottom: 2px solid black;
        text-align: center;
        margin: 0 0.313em 1.25em 0.625em;
      }
      @media (min-width: 768px) {
        flex-direction: row;
        .LineMid {
          border-right: 2px solid black;
        }
      }
    }
    .Container__Project {
      text-align: center;
      .Project__Title {
        font-size: 1.5em;
        font-weight: 700;
        text-align: center;
        margin-bottom: 30px;
      }
      .Project__Flex--Box {
        display: flex;
        flex-direction: column;
        gap: 20px;
        .ProjectImage__Box {
          align-self: center;
          width: 200px;
          height: 200px;
          border: solid 2px var(--font-color);
          figure {
            width: 100%;
            height: 100%;
          }
        }
        .Buttons__Box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          gap: 20px;
          button {
            border: solid 1px black;
            &:hover {
              background-color: black;
              color: white;
            }
          }
        }
      }
      @media (min-width: 550px) {
        .Project__Flex--Box {
          justify-content: center;
          flex-direction: row;
        }
      }
    }
  }
  .IconProject {
    margin: 0 auto;
    margin-bottom: 30px;
    width: 78px;
    height: 78px;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
