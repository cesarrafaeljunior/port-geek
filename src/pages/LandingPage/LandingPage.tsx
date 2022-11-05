import Typical from "react-typical";
import "../../utils/i18n";
import { useTranslation } from "react-i18next";
import {
  AsideSpace,
  DescriptionSection,
  HomeSection,
  TypingEffect,
  AnimatedLogo,
  Border,
  BtnDiv,
  TransitionAbout,
  AboutSection,
  CompanionSection,
  AboutDescriptionSpace,
  SecondBorder,
  TransitionHome,
  GroupMemberSpace,
  ShowCase,
} from "./styles";
import HeaderSpace from "../../components/Header/Header";
import { IconContext } from "react-icons";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ButtonComponent } from "../../components/Buttons";
import { members } from "../../database/members";
import { MemberComponent } from "../../components/MemberCard";

const LandingPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <HeaderSpace />

      <HomeSection id="section-home">
        <DescriptionSection>
          <h1>
            Imagine being able to show you with 100% of your potential and
            skills, Port Geek can offer this to you!
          </h1>
          <ShowCase></ShowCase>

          <BtnDiv>
            <form>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
              <ButtonComponent
                backgroundcolor={"var(--color-grey-3)"}
                lettercolor={"var(--color-white-mode)"}
              >
                Sign up
              </ButtonComponent>
            </form>
          </BtnDiv>
        </DescriptionSection>
        <Border />
        <TransitionAbout>
          <AnchorLink href="#section-about">
            <IconContext.Provider
              value={{
                color: "var(--color-grey-3)",
                size: "7em",
              }}
            >
              <IoIosArrowDown />
            </IconContext.Provider>
          </AnchorLink>
        </TransitionAbout>
        <AsideSpace>
          <h1>A new way to show who you are.</h1>
          <TypingEffect>
            <h2>
              {t("To make you a")}{" "}
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  "Developer",
                  5000,
                  "Programmer",
                  5000,
                  "Freelancer",
                  5000,
                ]}
              />
            </h2>
          </TypingEffect>
          <AnimatedLogo />
        </AsideSpace>
      </HomeSection>

      <AboutSection id="section-about">
        <AboutDescriptionSpace>
          <h1>About us</h1>
          <p>
            We are students from Kenzie Academy Brazil and we would like to
            present our final Front-end project for you all. Developed by our
            team, our project was inspired by a deeply necessity of helping our
            developer community into creating their first portolio in hands with
            the objetive to get their first job. Below we present our team:
          </p>
        </AboutDescriptionSpace>
        <SecondBorder />
        <TransitionHome>
          <AnchorLink href="#section-home">
            <IconContext.Provider
              value={{
                color: "var(--color-grey-3)",
                size: "7em",
              }}
            >
              <IoIosArrowUp />
            </IconContext.Provider>
          </AnchorLink>
        </TransitionHome>
        <CompanionSection>
          <h2>Group Members</h2>
          <GroupMemberSpace>
            {members.map((member) => (
              <MemberComponent memberInfo={member} />
            ))}
          </GroupMemberSpace>
        </CompanionSection>
      </AboutSection>
    </>
  );
};

export default LandingPage;
