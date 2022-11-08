import { About } from "../components/About";
import { Contacts } from "../components/Contacts";
import { Experience } from "../components/Experience";
import { Formation } from "../components/Formation";
import { Project } from "../components/Project";
import { Skills } from "../components/Skills";
import { UserIcon } from "../components/UserIcon";
import { UserInfos } from "../components/UserInfos";
import { ContainerSecondLayout } from "./style";

import SkillsIcon from "../../../assets/logo/Skills.png";
import ExperienceIcon from "../../../assets/logo/Experience.png";
import AboutIcon from "../../../assets/logo/About.png";
import FormationIcon from "../../../assets/logo/Formation.png";
import ProjectIcon from "../../../assets/logo/Project.png";
import { ModalDescription } from "../components/ModalDescription";

export const SecondLayout = () => {
  return (
    <ContainerSecondLayout>
      <ModalDescription
        bgColor={"--colorPrimaryL2"}
        color={"--titleLayout2"}
        borderColor={"--colorSecundaryL2"}
      />
      <header>
        <section className="Section__User__Header">
          <UserIcon width={8} height={8} borderR={50} border={"none"} />
        </section>

        <section className="Section__Infos__Header">
          <UserInfos fontSize={2} color={"--titleLayout"} fontSizeP={1} />
          <Contacts />
        </section>
      </header>
      <main>
        <section className="Section__Main">
          <div className="LineMid">
            <figure>
              <img src={SkillsIcon} alt="Skills Icon" />
            </figure>
            <Skills fontSize={1.5} color={"--font-color"} fontSizeP={1} />
            <figure>
              <img src={ExperienceIcon} alt="Experience Icon" />
            </figure>
            <Experience fontSize={1.5} color={"--font-color"} fontSizeP={1} />
          </div>
          <div>
            <figure>
              <img src={AboutIcon} alt="About Icon" />
            </figure>
            <About fontSize={1.5} color={"--font-color"} fontSizeP={1} />

            <figure>
              <img src={FormationIcon} alt="Formation Icon" />
            </figure>
            <Formation fontSize={1.5} color={"--font-color"} fontSizeP={1} />
          </div>
        </section>
        <figure className="IconProject">
          <img src={ProjectIcon} alt="Project Icon" />
        </figure>
        <Project
          width={13}
          heigth={3.5}
          fontSize={0.875}
          color={"black"}
          borderColor={"--titleLayout"}
          bgColor={"--titleLayout"}
        />
      </main>
    </ContainerSecondLayout>
  );
};
