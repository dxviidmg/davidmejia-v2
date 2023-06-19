import Card from "react-bootstrap/Card";
import { SkillList } from "./skillList";

export const SkillsCard = ({ title, description, skills }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <SkillList skills={skills} />
    </div>
  );
};
