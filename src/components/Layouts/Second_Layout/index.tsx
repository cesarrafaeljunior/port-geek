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
import { ILayout } from "../../../pages/Layout";
import { ModalDescription } from "../components/ModalDescription";
import { useState } from "react";

export const SecondLayout = ({ portfInfos }: ILayout) => {
  const { user_profile, adress, project } = portfInfos;
  const [isSeeingModal, setIsSeeingModal] = useState<boolean>(false);

  return (
    <ContainerSecondLayout>
      {isSeeingModal ? (
        <ModalDescription
          projectDescription={project.project_description}
          bgColor={"--colorPrimaryL2"}
          color={"--titleLayout2"}
          borderColor={"--colorPrimaryL2"}
          toggleMenu={setIsSeeingModal}
        />
      ) : null}
      <header>
        <section className="Section__User__Header">
          <UserIcon 
            width={8} 
            height={8} 
            borderR={50} 
            border={"none"}
            userImage={user_profile.userImage_url}
          />
        </section>

        <section className="Section__Infos__Header">
          <UserInfos
            fontSize={1.5}
            fontSizeP={1}
            color={"red"}
            personName={user_profile.name}
            birthDate={user_profile.birthDate}
            age={user_profile.age}
            adress={adress}
          />
          <Contacts
            githubLink={user_profile.github_url}
            linkedInLink={user_profile.linkedin_url}
            userEmail={user_profile.email}
            phoneNumber={user_profile.telephone}
          />
        </section>
      </header>
      <main>
        <section className="Section__Main">
          <div className="LineMid">
            <figure>
              <img src={SkillsIcon} alt="Skills Icon" />
            </figure>
            <Skills
              fontSize={1.5}
              color={"--font-color"}
              fontSizeP={1}
              skillDescription={user_profile.skills}
            />
            <figure>
              <img src={ExperienceIcon} alt="Experience Icon" />
            </figure>
            <Experience
              fontSize={1.5}
              color={"--font-color"}
              fontSizeP={1}
              experienceDescription={user_profile.experience}
            />
          </div>
          <div>
            <figure>
              <img src={AboutIcon} alt="About Icon" />
            </figure>
            <About
              fontSize={1.5}
              color={"--font-color"}
              fontSizeP={1}
              aboutYou={user_profile.aboutYou}
            />

            <figure>
              <img src={FormationIcon} alt="Formation Icon" />
            </figure>
            <Formation
              fontSize={1.5}
              color={"--font-color"}
              fontSizeP={1}
              formationDescription={user_profile.training}
            />
          </div>
        </section>
        <figure className="IconProject">
          <img src={ProjectIcon} alt="Project Icon" />
        </figure>
        <Project
          padding={0.5}
          fontSize={0.875}
          titleSize={1.5}
          color={"black"}
          borderColor={"--colorPrimaryL2"}
          bgColor={"--titleLayout"}
          toggleMenu={setIsSeeingModal}
          deployLink={project.projectDeploy_url}
          repositoryLink={project.projectRepository_url}
          projectName={project.project_title}
          projectImg={project.projectImage_url}
        />
      </main>
    </ContainerSecondLayout>
  );
};
