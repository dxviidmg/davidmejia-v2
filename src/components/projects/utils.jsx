import { Col, Row } from "react-bootstrap";
import { GetCustomIconAndName } from "../icons/Icons";

export const getContentProject = (project) => {
  return (
    <span>
      <strong>Description:</strong> {project.description}
      <br />
      <strong>Stack:</strong>
      <Row>
        {project.stack.map((skill, index) => (
          <Col lg={4}>
            <GetCustomIconAndName
              name={skill.name}
              icon={skill.icon}
              color={skill.color}
            />
          </Col>
        ))}
      </Row>
    </span>
  );
};
