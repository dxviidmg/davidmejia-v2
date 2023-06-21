import Card from "react-bootstrap/Card";
import { SkillList } from "./skillList";

export const SkillsCard = ({ title, description, skills }) => {
  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {description? <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle>: ""}
        <SkillList skills={skills} />
      </Card.Body>
    </Card>
  );
};

/*      <h3 className="text-center">{title}</h3>
      {description? <p>{description}</p>: ""}
      <SkillList skills={skills} />
    </div> */