import {Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import skills_by_categories from "../../data/skills.json";
import { SkillsCard } from "../SkillCard";

export const SkillListsByCategories = () => {
  return (
    <Row className="justify-content-center">
      {Object.entries(skills_by_categories).map(([category, skills]) => {
        return (
          <Col key={category} xs={6} md={3}>
            <SkillsCard
              title={category}
              skills={skills}
              key={category}
            ></SkillsCard>
          </Col>
        );
      })}
    </Row>
  );
};
