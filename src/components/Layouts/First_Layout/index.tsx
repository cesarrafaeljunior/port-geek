import { useState } from "react";
import { About } from "../components/About";
import { Contacts } from "../components/Contacts";
import { Experience } from "../components/Experience";
import { Formation } from "../components/Formation";
import { Project } from "../components/Project";
import { Skills } from "../components/Skills";
import { UserIcon } from "../components/UserIcon";
import { UserInfos } from "../components/UserInfos";
import { BodyFirstLayout, ContainerFirstLayout, HeaderFirstLayout } from "./styles";

export const FirstLayout = () => {
  const [isSeeingInfos, setIsSeeingInfos] = useState<boolean>(false)

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
          <Contacts />
          <UserInfos fontSize={1.5} fontSizeP={1} color={"red"} />
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
        <About fontSize={1.5} color={"--font-color"} fontSizeP={1} />
        <Skills fontSize={1.5} color={"--font-color"} fontSizeP={1} />
        <Formation fontSize={1.5} color={"--font-color"} fontSizeP={1} /> 
        <Experience fontSize={1.5} color={"--font-color"} fontSizeP={1} />
        <Project fontSize={1.5} color={"--font-color"} width={0} heigth={0} bgColor={""} borderColor={""} />
      </BodyFirstLayout>
    </ContainerFirstLayout>
  );
};
