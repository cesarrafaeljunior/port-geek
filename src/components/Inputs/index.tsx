import { InputHTMLAttributes, useState } from "react";
import { StyledDiv, StyledDivPassword } from "./styled";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  labelRefer: string;
  labelText: string;
  bordercolor?: string;
}

export const InputComponent = ({
  labelRefer,
  labelText,
  bordercolor,
  ...rest
}: IInput) => {
  return (
    <StyledDiv bordercolor={bordercolor}>
      <label htmlFor={labelRefer}>{labelText}</label>
      <input id={labelRefer} {...rest} />
    </StyledDiv>
  );
};

export const PasswordInputComponent = ({
  labelRefer,
  labelText,
  bordercolor,
  ...rest
}: IInput) => {
  const [isSeeingPassword, setIsSeeingPassword] = useState<boolean>(false);

  return (
    <StyledDivPassword bordercolor={bordercolor}>
      <label htmlFor={labelRefer}>{labelText}</label>
      <div>
        <input
          id={labelRefer}
          type={isSeeingPassword ? "text" : "password"}
          {...rest}
        />
        <button
          className="button-see-password"
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
