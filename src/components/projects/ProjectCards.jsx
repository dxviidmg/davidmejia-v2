import { Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

export const ProjectCard = ({ index, project }) => {
  return (
    <Col xs={12} md={6} xl={4} key={index}>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
              {project.name} <br />
              {project.period}
            
          </Accordion.Header>
          <Accordion.Body>
            <strong>Description:</strong> {project.description}
            <br />
            <strong>Stack:</strong>
            {project.stack.map((item, index2) => (
              <span key={index2}> {item},</span>
            ))}{" "}
            <ul className="proj-txtx">
              <h3>Activities</h3>
              {project.activities.map((activity, index3) => {
                return <li key={index3}>{activity}</li>;
              })}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Col>
  );
};
