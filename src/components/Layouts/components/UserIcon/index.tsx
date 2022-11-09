import { IconUserTP, UserIconStyled } from "./style";

interface IUserIcon extends IconUserTP {
  userImage: string;
}

export const UserIcon = ({ width, height, borderR, border, userImage }: IUserIcon) => {
  return (
    <UserIconStyled
      width={width}
      height={height}
      borderR={borderR}
      border={border}
      className="Container__UserIcon"
    >
      <figure>
        <img src={userImage} alt="Icone do Usuário" />
      </figure>
    </UserIconStyled>
  );
};
