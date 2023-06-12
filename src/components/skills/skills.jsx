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
import skills_by_categories from '../exampleData/skills.json'
import { SkillsByCategories } from "./SkillsByCategories";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import projects from "../exampleData/projects.json";
import { useEffect, useState } from "react";

import {SkillsByExperience} from "./SkillsByExperience"




export const Skills = () => {
  return (
    <section className="paddings min-height" id="skills">
      <Container>
        <Row>
          <Col className="text-center">
            <h2 >Skills</h2>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                defaultActiveKey="/home"
                className="nav-pills justify-content-center align-items-center"
                id="pill-tab"
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
                    <SkillsByCategories></SkillsByCategories>
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <SkillsByExperience></SkillsByExperience>
                  <Row>
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
