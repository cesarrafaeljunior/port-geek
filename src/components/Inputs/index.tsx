import { InputHTMLAttributes, useState } from "react";
import { StyledDiv } from "./styled";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { UseFormRegister } from "react-hook-form";

interface iInput extends InputHTMLAttributes<HTMLInputElement> {
  labelRefer: string;
  labelText: string;
  register: UseFormRegister<any>;
  registerkey: string;
}

export const InputComponent = ({
  labelRefer,
  labelText,
  register,
  registerkey,
  ...rest
}: iInput) => {
  return (
    <StyledDiv>
      <label htmlFor={labelRefer}>{labelText}</label>
      <input id={labelRefer} {...register(registerkey)} {...rest} />
    </StyledDiv>
  );
};

export const PasswordInputComponent = ({
  labelRefer,
  labelText,
  register,
  registerkey,
  ...rest
}: iInput) => {
  const [isSeeingPassword, setIsSeeingPassword] = useState<boolean>(false);

  return (
    <StyledDiv>
      <label htmlFor={labelRefer}>{labelText}</label>
      <div>
        <input
          id={labelRefer}
          type={isSeeingPassword ? "text" : "password"}
          {...register(registerkey)}
          {...rest}
        />
        <button
          onClick={() => {
            setIsSeeingPassword(!isSeeingPassword);
          }}
        >
          {isSeeingPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
        </button>
      </div>
    </StyledDiv>
  );
};
