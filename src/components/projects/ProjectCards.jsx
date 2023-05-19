import {Col} from "react-bootstrap";

export const ProjectCard = ({project}) => {
    console.log(project)
  return (
    <Col sm={6} md={4}>
      <div className="project-text">
        <h3>{project.name} <span className="project-text-company">for {project.company}</span></h3>
        <p1>{project.period}<br/>{project.description}</p1>
        
        <ul>
        {project.activities.map((activity, index) => {
            return(
                <li>{activity}</li>
            )
        })}
        </ul>

        <div>
      {project.stack.map((item, index) => (
        <span key={index}> * {item}  </span>
      ))} *
    </div>

      </div>
    </Col>
  );
};
