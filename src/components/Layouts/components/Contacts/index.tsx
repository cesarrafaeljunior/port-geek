import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import { ContactsStyled } from "./style";

export const Contacts = () => {
  return (
    <ContactsStyled className="Container__Contacts">
      <li>Contatos</li>
      <li>
        <a href="">
          <figure>
              <BsGithub className="Contact__Icon Github" />
          </figure>
          <p>Github</p>
        </a>
      </li>
      <li>
        <a href="">
          <figure>
              <BsLinkedin className="Contact__Icon Linkedin" />
          </figure>
          <p>Linkedin</p>
        </a>
      </li>
      <li>
        <a href="">
          <figure>
              <MdEmail className="Contact__Icon Email" />
          </figure>
          <p>Email</p>
        </a>
      </li>
      <li>
        <a href="">
          <figure>
              <BsWhatsapp className="Contact__Icon Whatsapp" />
          </figure>
          <p>Numero de telefone</p>
        </a>
      </li>
    </ContactsStyled>
  );
};
