import { useState } from "react";
import { ILayout } from "../../../pages/Layout";
import { IPortifolioInfos } from "../../../requests/portfRequest";
import { About } from "../components/About";
import { Contacts } from "../components/Contacts";
import { Experience } from "../components/Experience";
import { Formation } from "../components/Formation";
import { Project } from "../components/Project";
import { Skills } from "../components/Skills";
import { UserIcon } from "../components/UserIcon";
import { UserInfos } from "../components/UserInfos";
import { BodyFirstLayout, ContainerFirstLayout, HeaderFirstLayout } from "./styles";


export const FirstLayout = ({ portfInfos }: ILayout) => {
  const [isSeeingInfos, setIsSeeingInfos] = useState<boolean>(false)

  const {user_profile, adress, project} = portfInfos

  return(
    <ContainerFirstLayout>
      <HeaderFirstLayout seeInfo={isSeeingInfos} >
        <div className="div-infos">
          <UserIcon
              width={6}
              height={6}
              borderR={50}
              border={"borderUserIcon"}
          />
          <Contacts 
            githubLink={user_profile.github_url} 
            linkedInLink={user_profile.linkedin_url}
            userEmail={user_profile.email}
            phoneNumber={user_profile.telephone}
          />
          <UserInfos 
            fontSize={1.5}
            fontSizeP={1} 
            color={"red"} 
            personName={user_profile.name}
            birthDate={user_profile.birthDate}
            adress={adress}
          />
        </div>
          <button 
            className="show-user-infos" 
            onClick={() => {
              setIsSeeingInfos(!isSeeingInfos)
            }}>
              {isSeeingInfos ? "<" : ">"}
          </button>
      </HeaderFirstLayout>
      <BodyFirstLayout>
        <About 
          fontSize={1.5}
          color={"--font-color"}
          fontSizeP={1}
          aboutYou={user_profile.aboutYou}
        />
        <Skills 
          fontSize={1.5} 
          color={"--font-color"} 
          fontSizeP={1} 
          skillDescription={user_profile.skills}
        />
        <Formation 
          fontSize={1.5}
          color={"--font-color"}
          fontSizeP={1} 
          formationDescription={user_profile.training}
        /> 
        <Experience 
          fontSize={1.5}
          color={"--font-color"}
          fontSizeP={1}
          experienceDescription={user_profile.experience}
        />
        <Project 
          fontSize={1.5} 
          color={"--font-color"} 
          width={0} 
          heigth={0} 
          bgColor={""} 
          borderColor={""} 
          deployLink={project.projectDeploy_url}
          repositoryLink={project.projectRepository_url}
        />
      </BodyFirstLayout>
    </ContainerFirstLayout>
  );
};
