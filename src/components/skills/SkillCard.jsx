import Card from "react-bootstrap/Card";
import { SkillList } from "./skillList";

export const SkillsCard = ({ title, description, skills }) => {
  return (
    <div>
      <h3 className="text-center">{title}</h3>
      {description? <p>{description}</p>: ""}
      <SkillList skills={skills} />
    </div>
  );
};
