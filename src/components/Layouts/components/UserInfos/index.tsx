import { UserInfosStyled } from "./style";

export const UserInfos = () => {
  return (
    <UserInfosStyled>
      <div>
        <h1>Nome do usuário</h1>
        <p>Data de nascimento</p>
      </div>
      <div className="Adress_Infos">
        <p>País</p>
        <p>Cidade</p>
        <p>Cep</p>
      </div>
    </UserInfosStyled>
  );
};
