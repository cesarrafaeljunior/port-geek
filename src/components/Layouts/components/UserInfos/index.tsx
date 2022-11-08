import { iUserInfos, UserInfosStyled } from "./style";

export const UserInfos = ({ fontSize, color, fontSizeP }: iUserInfos) => {
  return (
    <UserInfosStyled
      fontSize={fontSize}
      color={color}
      fontSizeP={fontSizeP}
      className={"Container__UserInfos"}
    >
      <div className="Header__Infos__User">
        <h1>Nome do usuário</h1>
        <p>Data de nascimento/Idade</p>
      </div>
      <div className="Adress__Infos">
        <p>País</p>
        <p>Cidade</p>
        <p>Cep</p>
      </div>
    </UserInfosStyled>
  );
};
