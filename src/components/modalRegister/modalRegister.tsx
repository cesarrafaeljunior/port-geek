import { Container, Contem, Header, Main, Form } from "./style";
import { MdOutlineClose } from "react-icons/md";
import { createRef, useContext, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { InputComponent, PasswordInputComponent } from "../Inputs";
import { ButtonComponent } from "../Buttons";
import { UserContext } from "../../contexts/userContext";
import { iRegisterData } from "../../services/postRegister";
import { registerSchema } from "../../schemas/userSchema";

interface iModal {
  setModal: (state: boolean) => void;
}

export function Modal({ setModal }: iModal) {
  const modalRef = createRef<HTMLDivElement>();
  const {
    handleRegister,
    emaiDefault,
    setIsOpenModalRegister,
    setIsOpenModalLogin,
    isOpenModalRegister,
  } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterData>({
    resolver: yupResolver(registerSchema),
    defaultValues: { email: emaiDefault },
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

  if (!isOpenModalRegister) {
    return null;
  }

  return (
    <Container>
      <Contem ref={modalRef}>
        <Header>
          <h1>SignUp</h1>
          <MdOutlineClose onClick={() => setModal(false)} />
        </Header>

        <Main>
          <Form
            onSubmit={handleSubmit(handleRegister)}

            // setIsOpenModalRegister(false)
            // setIsOpenModalLogin(true)
          >
            <InputComponent
              labelRefer="Name"
              labelText="Name"
              placeholder="Enter your name"
              autoComplete="username"
              register={register}
              registerkey={"name"}
            />
            {errors.name && <p className="error">{errors.name?.message}</p>}

            <InputComponent
              labelRefer="email"
              labelText="Email"
              placeholder="Enter your email"
              autoComplete="email"
              register={register}
              registerkey={"email"}
            />
            {errors.email && <p className="error">{errors.email?.message}</p>}

            <PasswordInputComponent
              labelRefer="password"
              labelText="password"
              placeholder="Enter your password"
              autoComplete="new-password"
              register={register}
              registerkey={"password"}
            />
            {errors.password && (
              <p className="error">{errors.password?.message}</p>
            )}

            <PasswordInputComponent
              labelRefer="Confirm Password"
              labelText="Confirm Password"
              type="password"
              placeholder="Enter your password"
              autoComplete="new-password"
              register={register}
              registerkey={"confirmPassword"}
            />
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword?.message}</p>
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
