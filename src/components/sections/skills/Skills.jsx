import { SkillListsByCategories } from "./byCategories/SkillsByCategories";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { SkillsByExperience } from "./byExperience/SkillsByExperience";

export const Skills = () => {
  return (
    <section className="paddings" id="skills">
      <Container>
        <Row>
          <Col className="text-center">
            <h2>Skills</h2>
            <Tab.Container id="skills-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills justify-content-center align-items-center"
                id="skill-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">By category</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">By expertis</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    <SkillListsByCategories />
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <SkillsByExperience></SkillsByExperience>
                  <Row></Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
