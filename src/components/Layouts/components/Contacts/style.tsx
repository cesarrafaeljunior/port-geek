import styled from "styled-components";

export const ContactsStyled = styled.ul`
  list-style: none;

  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.6em;

  padding: 1.25em;

  @media (min-width: 768px) {
    justify-content: center;
  }

  li {
    /* width: 46%;
    max-width: 205px; */
    height: 3.125em;
    display: flex;
    gap: 0.313em;
    align-items: center;
    justify-content: flex-start;

    & > button {
      background: none;
      border: none;

      padding: 0;
    }

    & > a, & > button  {
      display: flex;
      align-items: center;
      gap: var(--gap-8);

      text-decoration: none;

      font-size: 1em;

      color: unset;
    }
  }
  figure {
    width: 1.563em;
    height: 1.563em;
    border-radius: 50%;
    .Contact__Icon {
      width: 1.6em;
      height: 1.6em;
      border-radius: 50%;
      &:hover {
        filter: brightness(1.3);
      }
    }
    .Github {
      background-color: white;
      color: #393939;
    }
    .Linkedin {
      color: #007ab9;
    }
    .Email {
      color: white;
      background-color: #a33838;
    }
    .Whatsapp {
      color: #51ce5e;
    }
  }
  p:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
