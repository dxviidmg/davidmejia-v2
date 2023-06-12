import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import pythonLogo from "../../assets/img/python.svg";
import djangoLogo from "../../assets/img/django.svg";
import pqslLogo from "../../assets/img/postgresql.svg";
import apiLogo from "../../assets/img/api.svg";
import graphqlLogo from "../../assets/img/graphql.svg";
import jsLogo from "../../assets/img/js.svg";
import reactLogo from "../../assets/img/react.svg";

import colorSharp from "../../assets/img/color-sharp.png";
import { MultiCarrusel } from "../multicarrusel/MultiCarrusel";
import skills_by_categories from "../exampleData/skills.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SkillsCard = ({ category, skills }) => {
  return (
    <Card className="padding-card">
      <Card.Header>
        {" "}
        <Card.Title>{category}</Card.Title>
      </Card.Header>
      <Card.Body>
          {skills.map((skill, index) => {
            return (
              <Card.Text key={index}>
                {skill.name} - {skill.experience}
              </Card.Text>
            );
          })}
      </Card.Body>
    </Card>
  );
};

export const SkillsByCategories = () => {
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
