import { IconUserTP, UserIconStyled } from "./style";
import cesarImg from "../../../../assets/members/cesarrafael.jpg";

export const UserIcon = ({ width, height, borderR, border }: IconUserTP) => {
  return (
    <UserIconStyled
      width={width}
      height={height}
      borderR={borderR}
      border={border}
    >
      <figure>
        <img src={cesarImg} alt="Icone do Usuário" />
      </figure>
    </UserIconStyled>
  );
};
