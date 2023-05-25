import { Col } from "react-bootstrap";

export const ProjectCard = ({ project }) => {
  //    console.log(project)
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <h3>
          {project.name}{" "}
          <span className="">
            for {project.company.name}
          </span>
        </h3>
        <p1>
          {project.period}
          <br />
          {project.description}
        </p1>
        
        <ul className="proj-txtx">
          {project.activities.map((activity, index) => {
            return <li>{activity}</li>;
          })}
        </ul>

        <div>
          {project.stack.map((item, index) => (
            <span key={index}> * {item} </span>
          ))}{" "}
          *
        </div>
      </div>
    </Col>
  );
};
