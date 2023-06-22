import Card from "react-bootstrap/Card";
import { SkillList } from "./skillList";

export const SkillsCard = ({ title, description, skills }) => {
  return (
    <Card className="h-100 shadow">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {description? <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle>: ""}
        <SkillList skills={skills} />
      </Card.Body>
    </Card>
  );
};