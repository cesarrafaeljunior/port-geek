import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import { ContactsStyled } from "./style";

interface IContacts {
  githubLink: string;
  linkedInLink: string;
  userEmail: string;
  phoneNumber: string;
}

export const Contacts = ({githubLink, linkedInLink, userEmail, phoneNumber}: IContacts) => {
  return (
    <ContactsStyled className="Container__Contacts">
      <li>
        <a href={githubLink} target="_blank" rel="noreferrer">
          <figure>
            <BsGithub className="Contact__Icon Github" />
          </figure>
          <p>Github</p>
        </a>
      </li>
      <li>
        <a href={linkedInLink} target="_blank" rel="noreferrer">
          <figure>
            <BsLinkedin className="Contact__Icon Linkedin" />
          </figure>
          <p>Linkedin</p>
        </a>
      </li>
      <li>
        <a href={`mailto:${userEmail}`} target="_blank" rel="noreferrer">
          <figure>
            <MdEmail className="Contact__Icon Email" />
          </figure>
          <p>{userEmail}</p>
        </a>
      </li>
      <li>
        <a href={`tel:${phoneNumber}`} target="_blank" rel="noreferrer">
          <figure>
            <BsWhatsapp className="Contact__Icon Whatsapp" />
          </figure>
          <p>{phoneNumber}</p>
        </a>
      </li>
    </ContactsStyled>
  );
};
