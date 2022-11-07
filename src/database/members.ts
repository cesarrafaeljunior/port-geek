import cesarImg from "../assets/members/cesarrafael.jpg";
import ariImg from "../assets/members/Ari.jpg";
import henriqueImg from "../assets/members/henriqueSadim.jpeg";
import mitoriImg from "../assets/members/lucasmitori.png";
import cruzImg from "../assets/members/lucascruz.jpg";
import jallesImg from "../assets/members/jalles.jpg";

export interface Imembers {
  memberInfo: {
    name: string;
    inCharge: string;
    img: {
      src: string;
      href: string;
      alt: string;
    };
  };
}

export const members = [
  {
    name: "César Rafael - Front-end Designer",
    inCharge: "Product Owner - PO",
    img: {
      src: cesarImg,
      href: "https://www.linkedin.com/in/cesarrafaeldevstudent",
      alt: "Cesar Rafael",
    },
  },
  {
    name: "Ariosvaldo Rodrigues - Front-end Designer",
    inCharge: "Scrum Master - SM",
    img: {
      src: ariImg,
      href: "http://www.linkedin.com/in/arimoncaojr",
      alt: "Ariosvaldo Rodrigues",
    },
  },
  {
    name: "Henrique Sadim - Front-end Designer",
    inCharge: "Tech Leader - TL",
    img: {
      src: henriqueImg,
      href: "https://www.linkedin.com/in/henrique-sandim-14992023a/",
      alt: "Henrique Sadim",
    },
  },
  {
    name: "Lucas Mitori - Front-end Designer",
    inCharge: "Quality Assurance - QA",
    img: {
      src: mitoriImg,
      href: "https://www.linkedin.com/in/lucas-okumura-2446a478/",
      alt: "Lucas Mitori",
    },
  },
  {
    name: "Lucas Cruz - Front-end Designer",
    inCharge: "Quality Assurance - QA",
    img: {
      src: cruzImg,
      href: "http://www.linkedin.com/in/lucas-cruz-de-souza-0b73b6205",
      alt: "Lucas Cruz",
    },
  },
  {
    name: "Jalles Batista - Front-end Designer",
    inCharge: "Quality Assurance - QA",
    img: {
      src: jallesImg,
      href: "https://www.linkedin.com/in/jallesbatista/",
      alt: "Jalles Batista",
    },
  },
];
