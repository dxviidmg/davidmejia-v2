import Card from "react-bootstrap/Card";


export const SkillsCard = ({ category, skills }) => {
    return (
      <Card className="padding-card">
        <Card.Header>
          {" "}
          <Card.Title>{category}</Card.Title>
        </Card.Header>
        <Card.Body>
            {skills.map((skill, index) => {
              return (
                <li key={index}>
                  {skill.name} - {skill.experience}
                </li>
              );
            })}
        </Card.Body>
      </Card>
    );
  };