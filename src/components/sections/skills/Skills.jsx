import { SkillListsByCategories } from "./byCategories/SkillsByCategories";
import { Container, Row, Col} from "react-bootstrap";
import { SkillsByExperience } from "./byExperience/SkillsByExperience";
import { TabContainer } from "../../commons/tabContainer/TabContainer";

export const Skills = () => {
  return (
    <section className="paddings" id="skills">
      <Container>
        <Row>
          <Col className="text-center">
            <h2>Skills</h2>
            <TabContainer classifications = {["By Category", "By expertis"]} contents={[<SkillListsByCategories/>, <SkillsByExperience/>]} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
