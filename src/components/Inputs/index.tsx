import { InputHTMLAttributes, useState } from "react";
import { StyledDiv } from "./styled";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface iInput extends InputHTMLAttributes<HTMLInputElement> {
  labelRefer: string;
  labelText: string;
}

export const InputComponent = ({ labelRefer, labelText, ...rest }: iInput) => {
  return (
    <StyledDiv>
      <label htmlFor={labelRefer}>{labelText}</label>
      <input id={labelRefer} {...rest} />
    </StyledDiv>
  );
};

export const PasswordInputComponent = ({
  labelRefer,
  labelText,
  ...rest
}: iInput) => {
  const [isSeeingPassword, setIsSeeingPassword] = useState<boolean>(false);

  return (
    <StyledDiv>
      <label htmlFor={labelRefer}>{labelText}</label>
      <div>
        <input
          id={labelRefer}
          type={isSeeingPassword ? "password" : "text"}
          {...rest}
        />
        <button
          onClick={() => {
            setIsSeeingPassword(!isSeeingPassword);
          }}
        >
          {isSeeingPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
        </button>
      </div>
    </StyledDiv>
  );
};
