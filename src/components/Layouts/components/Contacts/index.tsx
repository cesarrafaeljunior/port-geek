import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import { ContactsStyled } from "./style";

export const Contacts = () => {
  return (
    <ContactsStyled className="Container__Contacts">
      <li>
        <figure>
          <a href="">
            <BsGithub className="Contact__Icon Github" />
          </a>
        </figure>
        <p>Github</p>
      </li>
      <li>
        <figure>
          <a href="">
            <BsLinkedin className="Contact__Icon Linkedin" />
          </a>
        </figure>
        <p>Linkedin</p>
      </li>
      <li>
        <figure>
          <a href="">
            <MdEmail className="Contact__Icon Email" />
          </a>
        </figure>
        <p>Email</p>
      </li>
      <li>
        <figure>
          <a href="">
            <BsWhatsapp className="Contact__Icon Whatsapp" />
          </a>
        </figure>
        <p>Numero de telefone</p>
      </li>
    </ContactsStyled>
  );
};
