import styled from "styled-components";

export const ContainerThirthLayout = styled.div`
  display: flex;
  flex-direction: column;
  header {
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
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.625em;
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
  }
`;
