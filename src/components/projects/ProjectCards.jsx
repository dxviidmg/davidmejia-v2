import { Col, Card, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { GetCustomIconAndName } from "../icons/Icons";
import "./cards.css";

export const ProjectCard = ({ index, project }) => {
  return (
    <Col xs={12} md={6} xl={4} key={index} className="padding-card">
      <Card className="h-100 shadow">
        <Card.Body>
          <Card.Title>
            {project.name} <br />
            {project.period}
          </Card.Title>
          <strong>Description:</strong> {project.description}
          <br />
          <strong>Stack:</strong>
          <Row>
            
            {project.stack.map((skill, index) => (
              
              <Col lg={6}>
                <GetCustomIconAndName name={skill.name} icon={skill.icon} color={skill.color}/>
              </Col>
            ))}


          </Row>

        </Card.Body>
      </Card>
    </Col>
  );
};

/*
          <strong>Activities:</strong>
          <ul className="">
            {project.activities.map((activity, index3) => {
              return <li key={index3}>{activity}</li>;
            })}
          </ul>

*/