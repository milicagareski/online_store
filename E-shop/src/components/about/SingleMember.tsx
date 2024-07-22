import { teamMembersProps } from "../../data/teamMembers";
interface SingleMemberProps {
  item: teamMembersProps;
}

export default function SingleMember({ item }: SingleMemberProps) {
  return (
    <li>
      <article>
        <h1>{item.memberName}</h1>
        <img src={item.img} alt="member image" />
        <h3>{item.job}</h3>
        <p className="member_info">{item.info}</p>
      </article>
    </li>
  );
}
