import { InputHTMLAttributes, useState } from "react";
import { StyledDiv, StyledDivPassword } from "./styled";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { UseFormRegister } from "react-hook-form";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  labelRefer: string;
  labelText: string;
  bordercolor?: string;
  register: UseFormRegister<any>;
  registerkey: string;
}

export const InputComponent = ({
  labelRefer,
  labelText,
  bordercolor,
  color,
  register,
  registerkey,
  ...rest
}: IInput) => {
  return (
    <StyledDiv bordercolor={bordercolor} color={color}>
      <label htmlFor={labelRefer}>{labelText}</label>
      <input id={labelRefer} {...register(registerkey)} {...rest} />
    </StyledDiv>
  );
};

export const PasswordInputComponent = ({
  labelRefer,
  labelText,
  bordercolor,
  color,
  register,
  registerkey,
  ...rest
}: IInput) => {
  const [isSeeingPassword, setIsSeeingPassword] = useState<boolean>(false);

  return (
    <StyledDivPassword bordercolor={bordercolor} color = {color}>
      <label htmlFor={labelRefer}>{labelText}</label>
      <div>
        <input
          id={labelRefer}
          type={isSeeingPassword ? "text" : "password"}
          {...register(registerkey)}
          {...rest}
        />
        <button
          className="button-see-password"
          type="button"
          tabIndex={-1}
          onClick={() => {
            setIsSeeingPassword(!isSeeingPassword);
          }}
        >
          {isSeeingPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
        </button>
      </div>
    </StyledDivPassword>
  );
};
