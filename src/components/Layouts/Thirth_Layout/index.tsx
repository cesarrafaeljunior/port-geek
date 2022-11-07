import { About } from "../components/About";
import { Contacts } from "../components/Contacts";
import { Experience } from "../components/Experience";
import { Formation } from "../components/Formation";
import { Project } from "../components/Project";
import { Skills } from "../components/Skills";
import { UserIcon } from "../components/UserIcon";
import { UserInfos } from "../components/UserInfos";
import { ContainerThirthLayout } from "./style";

export const ThirthLayout = () => {
  return (
    <ContainerThirthLayout>
      <header>
        <UserIcon width={8} height={8} borderR={50} border={"borderUserIcon"} />
        <UserInfos fontSize={2} color={"--titleLayout"} fontSizeP={1} />
        <section>
          <About fontSize={2} color={"--titleLayout"} fontSizeP={1} />
          <Skills />
        </section>
      </header>
      <main></main>
      <Contacts />

      <Experience fontSize={2} color={"--titleLayout"} fontSizeP={1} />
      <Formation fontSize={2} color={"--titleLayout"} fontSizeP={1} />

      <Project />
    </ContainerThirthLayout>
  );
};
