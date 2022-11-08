import { About } from "../components/About";
import { Contacts } from "../components/Contacts";
import { Experience } from "../components/Experience";
import { Formation } from "../components/Formation";
import { ModalDescription } from "../components/ModalDescription";
import { Project } from "../components/Project";
import { Skills } from "../components/Skills";
import { UserIcon } from "../components/UserIcon";
import { UserInfos } from "../components/UserInfos";
import { ContainerThirthLayout } from "./style";

export const ThirthLayout = () => {
  return (
    <ContainerThirthLayout>
      <ModalDescription
        bgColor={"--colorPrimaryL3"}
        color={"--titleLayout"}
        borderColor={"--colorSecundaryL3"}
      />
      <header>
        <UserIcon width={8} height={8} borderR={50} border={"borderUserIcon"} />
        <UserInfos fontSize={2} color={"--titleLayout"} fontSizeP={1} />
        <section className="Section__Header">
          <About fontSize={1.5} color={"--titleLayout"} fontSizeP={1} />
          <div className="Division"></div>
          <Skills fontSize={1.5} color={"--titleLayout"} fontSizeP={1} />
        </section>
      </header>
      <main>
        <Contacts />
        <section className="Section__Main">
          <Experience fontSize={1.5} color={"--colorPrimaryL3"} fontSizeP={1} />
          <Formation fontSize={1.5} color={"--colorPrimaryL3"} fontSizeP={1} />
          <Project
            width={13}
            heigth={3.5}
            fontSize={0.875}
            color={"white"}
            borderColor={"--colorPrimaryL3"}
            bgColor={"--colorPrimaryL3"}
          />
        </section>
      </main>
    </ContainerThirthLayout>
  );
};
