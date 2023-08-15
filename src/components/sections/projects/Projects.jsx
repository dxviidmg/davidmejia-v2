import { Container, Row, Col} from "react-bootstrap";
import projects from "../../../data/projects.json";
import { MyCard } from "../../commons/cards/Card";
import { ContentProject } from "./ContentProject";
import "./projects.css";
import { TabContainer } from "../../commons/tabContainer/TabContainer";

const ProjectList = ({ category }) => {
  return (
    <Row>
      {projects.map((project, index) => {
        if (!category || (category && project.categories.includes(category))) {
          return (
            <Col xs={12} md={6} xl={4} key={index} className="padding-col">
              <MyCard title={project.name} content={ContentProject(project)} />
            </Col>
          );
        }
      })}
    </Row>
  );
};
export const Projects = () => {
  return (
    <section className="paddings" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>

            <TabContainer
              classifications={["All", "Web", "Data"]}
              contents={[
                <ProjectList />,
                <ProjectList category="Web" />,
                <ProjectList category="Data" />,
              ]}
            ></TabContainer>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
