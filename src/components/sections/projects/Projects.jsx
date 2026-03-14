import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import projects from "../../../data/projects.json";
import { GetCustomIcon } from "../../commons/icons/Icons";
import { useLang } from "../../../utils/LangContext";
import "./projects.css";

const ProjectCard = ({ project, tp }) => (
  <div className="dark-card dark-card-hover project-card">
    <div className="project-header">
      <h5 className="project-name">{tp.name}</h5>
      <span className="project-period">{project.period}</span>
    </div>
    <p className="project-company">{tp.company}</p>
    <p className="project-desc">{tp.description}</p>
    <div className="project-stack">
      {project.stack.map((s, i) => (
        <span key={i} className="stack-chip" title={s.name}>
          <GetCustomIcon name={s.icon || "Si" + s.name} color={s.color} />
        </span>
      ))}
    </div>
  </div>
);

const ProjectList = ({ category, t }) => (
  <Row>
    {projects
      .filter((p) => !category || p.categories.includes(category))
      .map((project, i) => {
        const idx = projects.indexOf(project);
        return (
          <Col xs={12} sm={6} lg={4} key={i} className="col-gap">
            <ProjectCard project={project} tp={t.projects.items[idx]} />
          </Col>
        );
      })}
  </Row>
);

export const Projects = () => {
  const { t } = useLang();
  return (
    <section className="section-dark paddings" id="projects">
      <Container>
        <h2>{t.projects.title}</h2>
        <Tab.Container defaultActiveKey="all">
          <Nav variant="pills" className="justify-content-center project-tabs">
            <Nav.Item><Nav.Link eventKey="all">{t.projects.tabs.all}</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="web">{t.projects.tabs.web}</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="data">{t.projects.tabs.data}</Nav.Link></Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="all"><ProjectList t={t} /></Tab.Pane>
            <Tab.Pane eventKey="web"><ProjectList category="Web" t={t} /></Tab.Pane>
            <Tab.Pane eventKey="data"><ProjectList category="Data" t={t} /></Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </section>
  );
};
