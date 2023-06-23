import Card from "react-bootstrap/Card";
import { SkillList } from "../../sections/skills/skillList";
import './cards.css'

export const MyCard = ({ title, description, skills=[], content}) => {
  return (
    <Card className="h-100 shadow">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {description? <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle>: ""}
        <SkillList skills={skills} />
        {content}
      </Card.Body>
    </Card>
  );
};