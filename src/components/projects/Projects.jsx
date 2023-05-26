import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import projects from "../exampleData/projects.json";
import { ProjectCard } from "./ProjectCards";
import { useEffect, useState } from "react";

export const Projects = () => {
  const webProjects = filterProjectsByCategory("Web")
  const dataProjects = filterProjectsByCategory("Data")

  function filterProjectsByCategory(categories){
    return projects.filter((item) => item.categories && item.categories.includes(categories))
  }



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
                        <ProjectCard
                          index={index}
                          project={project}
                        ></ProjectCard>
                      );
                    })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <Row>
                    {webProjects.map((project, index) => {
                      return (
                        <ProjectCard
                          index={index}
                          project={project}
                        ></ProjectCard>
                      );
                    })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <Row>
                    {dataProjects.map((project, index) => {
                      return (
                        <ProjectCard
                          index={index}
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
