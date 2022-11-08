import { IAdress } from "../../../../requests/portfRequest";
import { iStyledInfos, UserInfosStyled } from "./style";

interface IUserInfos extends iStyledInfos{
  personName: string;
  birthDate: string;
  adress: IAdress;
}

export const UserInfos = ({ fontSize, color, fontSizeP, personName, birthDate, adress }: IUserInfos) => {
  return (
    <UserInfosStyled
      fontSize={fontSize}
      color={color}
      fontSizeP={fontSizeP}
      className={"Container__UserInfos"}
    >
      <div className="Header__Infos__User">
<<<<<<< HEAD
        <h1>{personName}</h1>
        <p>{birthDate}</p>
=======
        <h1>Nome do usuário</h1>
        <p>Data de nascimento/Idade</p>
>>>>>>> e31182e6f507d7380be409be34e31251a859b62b
      </div>
      <div className="Adress__Infos">
        <p>{adress.country}</p>
        <p>{adress.city}</p>
        <p>{adress.zipCode}</p>
      </div>
    </UserInfosStyled>
  );
};
