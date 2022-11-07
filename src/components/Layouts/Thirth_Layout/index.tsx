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
        <UserIcon
          width={120}
          height={120}
          borderR={50}
          border={"borderUserIcon"}
        />
        <UserInfos />
        <Contacts />
      </header>
      <main></main>

      <About />
      <Experience />
      <Formation />
      <Skills />
      <Project />
    </ContainerThirthLayout>
  );
};
