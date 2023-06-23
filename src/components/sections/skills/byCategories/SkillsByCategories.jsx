import {Row, Col } from "react-bootstrap";
import skills_by_categories from "../../../../data/skills.json";
import { MyCard } from "../../../commons/cards/Card";
import './../skills.css'


export const SkillListsByCategories = () => {
  return (
    <Row className="justify-content-center">
      {Object.entries(skills_by_categories).map(([category, skills]) => {
        return (
          <Col key={category} xs={8} sm={6} md={4} lg={3} className="padding-col">
            <MyCard
              title={category}
              skills={skills}
              key={category}
            />
          </Col>
        );
      })}
    </Row>
  );
};
