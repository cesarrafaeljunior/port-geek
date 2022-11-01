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
} from "./styles";
import HeaderSpace from "../../components/Header/Header";

const LandingPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <HeaderSpace />

      <HomeSection>
        <DescriptionSection>
          <h1>
            Imagine being able to show you with 100% of your potential and
            skills, Port Geek can offer this to you!
          </h1>
          <BtnDiv>
            <form>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
              <button>Sign up</button>
            </form>
          </BtnDiv>
        </DescriptionSection>
        <Border />
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
    </>
  );
};

export default LandingPage;
