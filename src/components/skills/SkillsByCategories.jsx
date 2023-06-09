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




export const SkillsByCategories = () => {
    return (
        





<>

{Object.entries(skills_by_categories).map(([category, skills]) => {
            return (<Col md={3}>
              <h3 key={category}>{category}</h3>

              {skills.map((skill, i) => {
                console.log('toss', typeof skill, skill.name)
                return (<div>{skill.name} - {skill.experience}</div>)
              })}
            </Col>)
          })}

</>
        



    )
}