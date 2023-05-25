import { Col } from "react-bootstrap";

export const ProjectCard = ({ project }) => {
  //    console.log(project)
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <div className="proj-bx-txt">
          {" "}
          <h3>
            {project.name} <span className="">for {project.company.name}</span>
          </h3>
          <p1>
            Period: {project.period}
            <br />
            Description: {project.description}
            <br />
            Stack: 
            {project.stack.map((item, index) => (
              <span key={index}> {item},</span>
            ))}{" "}
          </p1>
        </div>

        <div></div>

        <ul className="proj-txtx">
          <h3>Activities</h3>
          {project.activities.map((activity, index) => {
            return <li>{activity}</li>;
          })}
        </ul>
      </div>
    </Col>
  );
};
