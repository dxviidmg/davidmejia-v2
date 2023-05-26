import { Col } from "react-bootstrap";

export const ProjectCard = ({ index, project }) => {
  return (
    <Col sm={6} md={4} key={index}>
      <div className="proj-imgbx">
        <div className="proj-bx-txt">
          {" "}
          <h3>
            {project.name} <span className="">for {project.company.name}</span>
          </h3>
          <p>
            Period: {project.period}
            <br />
            Description: {project.description}
            <br />
            Stack:
            {project.stack.map((item, index2) => (
              <span key={index2}> {item},</span>
            ))}{" "}
          </p>
        </div>

        <div></div>

        <ul className="proj-txtx">
          <h3>Activities</h3>
          {project.activities.map((activity, index3) => {
            return <li key={index3}>{activity}</li>;
          })}
        </ul>
      </div>
    </Col>
  );
};
