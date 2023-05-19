import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import projects from "./data.json";
import { ProjectCard } from "./ProjectCards";

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h1>Projects</h1>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                defaultActiveKey="/home"
                className="nav-pills justify-content-center align-items-center"
                id="pill-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Web development</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="thirtd">
                    Data Analytics / Data Science
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          project={project}
                        ></ProjectCard>
                      );
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
