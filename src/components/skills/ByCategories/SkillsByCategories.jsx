import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import skills_by_categories from "../../exampleData/skills.json";
import { SkillsCard } from "./skillCard";


export const SkillListsByCategories = () => {
  return (
    <Row>
      {Object.entries(skills_by_categories).map(([category, skills]) => {
        return (
          <Col key={category} md={3}>
            <SkillsCard category={category} skills={skills} key={category}></SkillsCard>
          </Col>
        );
      })}
    </Row>
  );
};
