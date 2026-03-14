import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import projects from "../../../data/projects.json";
import { GetCustomIcon } from "../../commons/icons/Icons";
import "./projects.css";

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <div className="project-header">
      <h5 className="project-name">{project.name}</h5>
      <span className="project-period">{project.period}</span>
    </div>
    <p className="project-company">{project.company.name}</p>
    <p className="project-desc">{project.description}</p>
    <div className="project-stack">
      {project.stack.map((s, i) => (
        <span key={i} className="stack-chip" title={s.name}>
          <GetCustomIcon name={s.icon || "Si" + s.name} color={s.color} />
        </span>
      ))}
    </div>
  </div>
);

const ProjectList = ({ category }) => (
  <Row>
    {projects
      .filter((p) => !category || p.categories.includes(category))
      .map((project, i) => (
        <Col xs={12} sm={6} lg={4} key={i} className="project-col">
          <ProjectCard project={project} />
        </Col>
      ))}
  </Row>
);

export const Projects = () => {
  return (
    <section className="paddings" id="projects">
      <Container>
        <h2>Projects</h2>
        <Tab.Container defaultActiveKey="all">
          <Nav variant="pills" className="justify-content-center project-tabs">
            <Nav.Item><Nav.Link eventKey="all">All</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="web">Web</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="data">Data</Nav.Link></Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="all"><ProjectList /></Tab.Pane>
            <Tab.Pane eventKey="web"><ProjectList category="Web" /></Tab.Pane>
            <Tab.Pane eventKey="data"><ProjectList category="Data" /></Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </section>
  );
};
