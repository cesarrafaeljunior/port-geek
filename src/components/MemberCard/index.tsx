import { Imembers } from "../../database/members";
import { MemberCard, MemberCardImg, MemberCardInfo } from "./styles";

export const MemberComponent = ({ memberInfo }: Imembers) => {
  const { name, inCharge, img } = memberInfo;

  return (
    <MemberCard>
      <MemberCardImg href={`${img.href}`}>
        <img src={`${img.src}`} alt={`${img.alt}`} />
      </MemberCardImg>
      <MemberCardInfo>
        <h3>{`${name}`}</h3>
        <h4>{`${inCharge}`}</h4>
      </MemberCardInfo>
    </MemberCard>
  );
};
