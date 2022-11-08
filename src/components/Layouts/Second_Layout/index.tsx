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
<<<<<<< HEAD
import { ILayout } from "../../../pages/Layout";

export const SecondLayout = ({portfInfos}: ILayout) => {
  const {user_profile, adress, project} = portfInfos
  
=======

export const SecondLayout = () => {
>>>>>>> e31182e6f507d7380be409be34e31251a859b62b
  return (
    <ContainerSecondLayout>
      <header>
        <section className="Section__User__Header">
          <UserIcon width={8} height={8} borderR={50} border={"none"} />
        </section>

        <section className="Section__Infos__Header">
<<<<<<< HEAD
          <UserInfos 
            fontSize={1.5}
            fontSizeP={1} 
            color={"red"} 
            personName={user_profile.name}
            birthDate={user_profile.birthDate}
            adress={adress}
          />
          <Contacts 
            githubLink={user_profile.github_url} 
            linkedInLink={user_profile.linkedin_url}
            userEmail={user_profile.email}
            phoneNumber={user_profile.telephone}
          />
=======
          <UserInfos fontSize={2} color={"--titleLayout"} fontSizeP={1} />
          <Contacts />
>>>>>>> e31182e6f507d7380be409be34e31251a859b62b
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
<<<<<<< HEAD
            <About 
              fontSize={1.5}
              color={"--font-color"}
              fontSizeP={1}
              aboutYou={user_profile.aboutYou}
            />
=======
            <About fontSize={1.5} color={"--font-color"} fontSizeP={1} />
>>>>>>> e31182e6f507d7380be409be34e31251a859b62b

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
