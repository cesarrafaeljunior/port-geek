import { Container, Contem, Header, Main, Form } from "./style";
import { MdOutlineClose } from "react-icons/md";
import { useRef, useContext, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { InputComponent, PasswordInputComponent } from "../Inputs";
import { ButtonComponent } from "../Buttons";
import { UserContext } from "../../contexts/userContext";
import { iUserLogin } from "../../services/postLogin";
import { useTranslation } from "react-i18next";
import * as yup from "yup";

export function ModalLogin() {
  const { t } = useTranslation();
  const { handleLogin, isOpenModalLogin, setIsOpenModalLogin } =
    useContext(UserContext);
  const error = t("Required field!");
  const errorMensage = t("Invalid email!");
  const loginSchema = yup.object().shape({
    email: yup.string().email(errorMensage).required(error),
    password: yup.string().required(error),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserLogin>({
    resolver: yupResolver(loginSchema),
  });
  const modalRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    function handleOutClick(event: any) {
      const value = modalRef?.current;
      if (value && !value.contains(event.target)) {
        setIsOpenModalLogin(false);
      }
    }
    document.addEventListener("mousedown", handleOutClick);
    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  if (!isOpenModalLogin) {
    return null;
  }

  return (
    <Container>
      <Contem ref={modalRef}>
        <Header>
          <h1>Login</h1>
          <MdOutlineClose onClick={() => setIsOpenModalLogin(false)} />
        </Header>
        <Main>
          <Form onSubmit={handleSubmit(handleLogin)}>
            <InputComponent
              labelRefer="Email"
              labelText="Email"
              placeholder={t("Enter your email")}
              autoComplete="email"
              register={register}
              registerkey={"email"}
              color={errors.email ? "color-secondary" : "color-primary"}
            />
            {errors.email && <p className="error">{errors.email?.message}</p>}

            <PasswordInputComponent
              labelRefer="password"
              labelText={t("Password")}
              placeholder={t("Enter your password")}
              autoComplete="current-password"
              register={register}
              registerkey={"password"}
              color={errors.password ? "color-secondary" : "color-primary"}
            />
            {errors.password && (
              <p className="error">{errors.password?.message}</p>
            )}

            <ButtonComponent
              type="submit"
              backgroundcolor={"var(--color-grey-3)"}
              lettercolor={"var(--color-white-mode)"}
              hovercolor={"var(--color-grey-2)"}
            >
              Submit
            </ButtonComponent>
          </Form>
        </Main>
      </Contem>
    </Container>
  );
}
