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
import skills_by_categories from '../exampleData/skills.json'


export const Skills = () => {
  //  const skills = [{ name: "Python", img: pythonLogo, experience: "7 Years" }, { name: "Django", img: djangoLogo, experience: "7 Years" }, { name: "Postgresql", img: pqslLogo, experience: "4 Years"  }, { name: "API rest", img: apiLogo, experience: "4 Years"  }, { name: "Graphql", img: graphqlLogo, experience: "3 Months"  }, {name: "Js", img: jsLogo, experience: "6 months" }, {name: "React", img: reactLogo, experience: "6 months"}]

  console.log(skills_by_categories)
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
      <Col xl={12}><h1>Skills</h1></Col>

            {Object.entries(skills_by_categories).map(([category, skills]) => {
              return (<Col md={3}>
                <h3 key={category}>{category}</h3>

                {skills.map((skill, i) => {
                  console.log('toss', typeof skill, skill.name)
                  return (<div>{skill.name} - {skill.experience}</div>)
                })}
              </Col>)


            })}
        </Row>
      </Container>
    </section>
  );
};
