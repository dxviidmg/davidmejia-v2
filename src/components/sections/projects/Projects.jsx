import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import projects from "../../../data/projects.json";
import { MyCard } from "../../commons/cards/Card";
import { ContentProject } from "./ContentProject";

export const Projects = () => {
  const webProjects = filterProjectsByCategory("Web");
  const dataProjects = filterProjectsByCategory("Data");

  function filterProjectsByCategory(categories) {
    return projects.filter(
      (item) => item.categories && item.categories.includes(categories)
    );
  }

  return (
    <section className="paddings" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills justify-content-center align-items-center"
                id="project-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Web</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Data Analytics</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return (
                        <Col xs={12} md={6} xl={4} key={index} className="padding-col">
                        <MyCard 
                        title={project.name}
                        content={ContentProject(project)}
                      /></Col>
                      );
                    })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <Row>
                    {webProjects.map((project, index) => {
                      return (
                        <Col xs={12} md={6} xl={4} key={index} className="padding-col">
                        <MyCard 
                        title={project.name}
                        content={ContentProject(project)}
                      /></Col>
                      );
                    })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <Row>
                    {dataProjects.map((project, index) => {
                      return (
                        <Col xs={12} md={6} xl={4} key={index} className="padding-col">
                        <MyCard 
                        title={project.name}
                        content={ContentProject(project)}
                      /></Col>
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
