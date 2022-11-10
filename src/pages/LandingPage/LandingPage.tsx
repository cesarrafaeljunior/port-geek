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
  AboutSection,
  CompanionSection,
  AboutDescriptionSpace,
  SecondBorder,
  GroupMemberSpace,
  ShowCase,
  ImageCarouselDiv,
  AboutArrow,
  LandingArrow,
} from "./styles";
import { useContext } from "react";
import HeaderSpace from "../../components/Header/Header";
import { IconContext } from "react-icons";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import AnchorLink from "react-anchor-link-smooth-scroll";

import lucasMitoriImg from "../../assets/members/lucasmitori.jpg";
import cesarRafaelImg from "../../assets/members/cesarrafael.jpg";
import lucasCruzImg from "../../assets/members/lucascruz.jpg";
import henriqueSadimImg from "../../assets/members/henriqueSadim.jpg";
import AriImg from "../../assets/members/Ari.jpg";
import jallesImg from "../../assets/members/jalles.jpg";

import portfolio01 from "../../assets/img/Layout-1.png";
import portfolio02 from "../../assets/img/Layout-2.png";
import portfolio03 from "../../assets/img/Layout-3.png";

import { ButtonComponent } from "../../components/Buttons";
import { iRegisterData } from "../../services/postRegister";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/userContext";
import * as yup from "yup";
import {
  MemberCard,
  MemberCardImg,
  MemberCardInfo,
} from "../../components/MemberCard/styles";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Modal } from "../../components/modalRegister/modalRegister";
import { ModalLogin } from "../../components/modalLogin/modalLogin";

const LandingPage = () => {
  const { t } = useTranslation();

  const {
    setEmailDefault,
    handleRegister,
    setIsOpenModalRegister,
    isOpenModalRegister,
  } = useContext(UserContext);
  const minimoTres = t("The name needs at least 3 digits!");
  const error = t("Required field!");
  const errorMensage = t("Invalid email!");
  const minimoOito = t("The password must contain at least 8 digits!");
  const errorLimitacao = t(
    "The password must contain at least one capital letter, one special character and a number"
  );
  const senhasIguais = t("Passwords are not the same!");
  const registerSchema = yup.object().shape({
    name: yup.string().min(3, minimoTres).required(error),
    email: yup.string().email(errorMensage).required(error),
    password: yup
      .string()
      .min(8, minimoOito)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        errorLimitacao
      )
      .required(error),
    confirmPassword: yup.string().oneOf([yup.ref("password")], senhasIguais),
  });
  const { register, reset, handleSubmit } = useForm<iRegisterData>({
    resolver: yupResolver(registerSchema),
  });

  const cathValue = () => {
    const input = document.querySelector("#emailLanding") as HTMLInputElement;
    setEmailDefault(input.value);
  };

  return (
    <>
      <HeaderSpace />
      <HomeSection id="section-home">
        <DescriptionSection>
          <h1>
            {t(
              "Imagine being able to show you with 100% of your potential and skills, Port Geek can offer this to you!"
            )}
          </h1>
          <ShowCase>
            <Carousel
              className="CarouselCenter"
              autoPlay={true}
              interval={2000}
              infiniteLoop={true}
              showThumbs={false}
            >
              <ImageCarouselDiv>
                <img src={portfolio01} alt="portfolio 01" />
              </ImageCarouselDiv>

              <ImageCarouselDiv>
                <img src={portfolio02} alt="portfolio 02" />
              </ImageCarouselDiv>

              <ImageCarouselDiv>
                <img src={portfolio03} alt="portfolio 03" />
              </ImageCarouselDiv>
            </Carousel>
          </ShowCase>
          <BtnDiv>
            <form onSubmit={handleSubmit(handleRegister)}>
              <input
                id="emailLanding"
                placeholder={t("Enter your email")}
                {...register("email")}
              />
              <ButtonComponent
                type="submit"
                backgroundcolor={"var(--color-grey-3)"}
                lettercolor={"var(--color-white-mode)"}
                onClick={(event) => {
                  event.preventDefault();
                  setIsOpenModalRegister(true);
                  cathValue();
                  reset();
                }}
              >
                {t("Sign up")}
              </ButtonComponent>
            </form>
          </BtnDiv>
        </DescriptionSection>
        <Border />
        <AboutArrow href="#section-about" offset={100}>
          <IconContext.Provider
            value={{
              color: "var(--color-grey-3)",
              size: "7em",
            }}
          >
            <IoIosArrowDown />
          </IconContext.Provider>
        </AboutArrow>
        <AsideSpace>
          <h2>{t("A new way to show who you are.")}</h2>
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
          <h2>{t("About us")}</h2>
          <p>
            {t(
              "We are Students at Kenzie Academy Brazil and we would like to present our final Front-end project. Developed from start to finish exclusively by our group of 6 members, the project was inspired by a huge need to help the developer community to create their first portfolio quickly and practically, helping to get their first job."
            )}
          </p>
        </AboutDescriptionSpace>
        <SecondBorder />
        <LandingArrow href="#section-home" offset={100}>
          <IconContext.Provider
            value={{
              color: "var(--color-grey-3)",
              size: "7em",
            }}
          >
            <IoIosArrowUp />
          </IconContext.Provider>
        </LandingArrow>
        <CompanionSection>
          <h2>{t("Group Members")}</h2>
          <GroupMemberSpace>
            <MemberCard>
              <MemberCardImg href="https://www.linkedin.com/in/cesarrafaeldevstudent">
                <img src={cesarRafaelImg} alt="Cesar Rafael" />
              </MemberCardImg>
              <MemberCardInfo>
                <h3>César Rafael - Front-end Developer</h3>
                <h4>Product Owner</h4>
              </MemberCardInfo>
            </MemberCard>
            <MemberCard>
              <MemberCardImg href="http://www.linkedin.com/in/arimoncaojr">
                <img src={AriImg} alt="Ariosvaldo Rodrigues" />
              </MemberCardImg>
              <MemberCardInfo>
                <h3>Ari Júnior - Front-end Developer</h3>
                <h4>Scrum Master</h4>
              </MemberCardInfo>
            </MemberCard>
            <MemberCard>
              <MemberCardImg href="https://www.linkedin.com/in/henrique-sandim-14992023a/">
                <img src={henriqueSadimImg} alt="Henrique Sadim" />
              </MemberCardImg>
              <MemberCardInfo>
                <h3>Henrique Sadim - Front-end Developer</h3>
                <h4>Tech Leader</h4>
              </MemberCardInfo>
            </MemberCard>
            <MemberCard>
              <MemberCardImg href="https://www.linkedin.com/in/lucas-okumura-2446a478/">
                <img src={lucasMitoriImg} alt="Lucas Mitori" />
              </MemberCardImg>
              <MemberCardInfo>
                <h3>Lucas Mitori - Front-end Developer</h3>
                <h4>Quality Assurance</h4>
              </MemberCardInfo>
            </MemberCard>
            <MemberCard>
              <MemberCardImg href="http://www.linkedin.com/in/lucas-cruz-de-souza-0b73b6205">
                <img src={lucasCruzImg} alt="Lucas Cruz" />
              </MemberCardImg>
              <MemberCardInfo>
                <h3>Lucas Cruz - Front-end Developer</h3>
                <h4>Quality Assurance</h4>
              </MemberCardInfo>
            </MemberCard>
            <MemberCard>
              <MemberCardImg href="https://www.linkedin.com/in/jallesbatista/">
                <img src={jallesImg} alt="Jalles Batista" />
              </MemberCardImg>
              <MemberCardInfo>
                <h3>Jalles Batista - Front-end Developer</h3>
                <h4>Quality Assurance</h4>
              </MemberCardInfo>
            </MemberCard>
          </GroupMemberSpace>
        </CompanionSection>
      </AboutSection>
      {isOpenModalRegister && <Modal setModal={setIsOpenModalRegister} />}
      <ModalLogin />
    </>
  );
};

export default LandingPage;
