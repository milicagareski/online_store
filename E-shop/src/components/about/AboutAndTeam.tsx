import { aboutArticles, AboutProps } from "../../data/aboutArticle";
import SingleArticle from "./SingleArticle";
import { teamMembers, teamMembersProps } from "../../data/teamMembers";
import SingleMember from "./SingleMember";

function AboutAndTeam() {
  return (
    <section className="container">
      <ul>
        {aboutArticles.map((item: AboutProps) => (
          <SingleArticle key={item.id} item={item} />
        ))}
      </ul>
      <h1 id="meet_team">Meet Out Team</h1>
      <ul>
        {teamMembers.map((item: teamMembersProps) => (
          <SingleMember key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}

export default AboutAndTeam;
