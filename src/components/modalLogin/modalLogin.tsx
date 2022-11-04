import { Container, Contem, Header, Main, Form } from "./style";
import { MdOutlineClose } from "react-icons/md";
import { createRef, useContext, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { InputComponent, PasswordInputComponent } from "../Inputs";
import { ButtonComponent } from "../Buttons";
import { UserContext } from "../../contexts/userContext";
import { loginSchema } from "../../schemas/userSchema";
import { ModalContext } from "../../contexts/modalContext";
import { iUserLogin } from "../../services/postLogin";
interface iModal {
  setModal: (state: boolean) => void;
}

export function ModalLogin({ setModal }: iModal): JSX.Element {
  const modalRef = createRef<HTMLDivElement>();
  const { handleLogin, isValidate } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserLogin>({
    resolver: yupResolver(loginSchema),
  });

  useEffect(() => {
    const handleOnClick = (event: MouseEvent) => {
      if (!modalRef.current?.contains(event.target as Element)) {
        setModal(false);
      }
    };

    document.addEventListener("mousedown", handleOnClick);

    return () => {
      document.removeEventListener("mousedown", handleOnClick);
    };
  }, []);

  return (
    <Container>
      <Contem ref={modalRef}>
        <Header>
          <h1>SignUp</h1>
          <MdOutlineClose onClick={() => setModal(false)} />
        </Header>
        <Main>
        <Form onSubmit={handleSubmit(handleLogin)}>
          <InputComponent
            labelRefer="Email"
            labelText="email"
            placeholder="Digite seu email"
            autoComplete="email"
            register={register}
            registerkey={"email"}
          />
          {errors.email && <p className="error">{errors.email?.message}</p>}

          <PasswordInputComponent
            labelRefer="password"
            labelText="password"
            type="password"
            placeholder="Digite sua senha"
            autoComplete="current-password"
            register={register}
            registerkey={"password"}
          />
          {errors.password && <p className="error">{errors.email?.message}</p>}

          <ButtonComponent type="submit">Submit</ButtonComponent>
        </Form>
        </Main>
      </Contem>
    </Container>
  );
}
