import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import { ContactsStyled } from "./style";

export const Contacts = () => {
  return (
    <ContactsStyled>
      <li>
        <figure>
          <BsGithub />
        </figure>
        <p>Github</p>
      </li>
      <li>
        <figure>
          <BsLinkedin />
        </figure>
        <p>Linkedin</p>
      </li>
      <li>
        <figure>
          <MdEmail />
        </figure>
        <p>Email</p>
      </li>
      <li>
        <figure>
          <BsWhatsapp />
        </figure>
        <p>Numero de telefone</p>
      </li>
    </ContactsStyled>
  );
};
